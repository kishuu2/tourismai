// Load environment variables
require('dotenv').config({ path: './config.env' });

const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const bcrypt = require('bcryptjs');

// Import models
const UserModel = require("./Models/booking");
const UserModel5 = require("./Models/manager");
const UserModel6 = require("./Models/package");
const UserModel7 = require("./Models/hotel");

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));

// MongoDB Atlas Connection
const connectDB = async () => {
    try {

        const conn = await mongoose.connect(
            process.env.mongoURI || 'mongodb+srv://chokwalakishan:j2VuzvCahpBKcYU2@cluster0.ko2os9e.mongodb.net/Tourist?retryWrites=true&w=majority&appName=Cluster0'
        );

        console.log(
            `MongoDB Atlas connected successfully: ${conn.connection.host}`
        );

    } catch (error) {

        console.error(
            'Error connecting to MongoDB Atlas:',
            error.message
        );

        process.exit(1);
    }
};

// Connect to database
connectDB();

// Create text index for search functionality
UserModel6.createIndexes({ name: "text" });

// Schema definitions (keeping for backward compatibility)
const UserSchema2 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    anumber:{
        type: Number,
        required:true,
    },
    cnumber: {
        type: Number,
        required:true,
    },
    pack: {
        type:String,
        required:true,
    },
    additional: {
        type: String,
        required:true,
    },
});

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const destinationSchema = new mongoose.Schema({
  name: String,
  budget_category: String,
  travel_type: String,
  duration_days: Number,
  family_friendly: String,
  popularity_score: Number,
  best_season: String,
  estimated_cost: String,
  description: String,
  region: String,
  image: String
});
// Create models
const User = mongoose.model('users', UserSchema);
const User2 = mongoose.model('booking', UserSchema2);

// Create indexes
User.createIndexes();
User2.createIndexes();

// Routes
app.get("/", (req, resp) => {
    resp.send("Tourism Management API is Working");
});

// Booking routes
app.post('/booking', async (req, res) => {
    try {
        const requiredFields = ['name', 'number', 'anumber', 'cnumber', 'pack', 'additional'];
        if (!requiredFields.every(field => field in req.body)) {
            return res.status(400).json({ error: 'Please fill in all required fields.' });
        }

        const newBooking = new User2(req.body);
        const savedBooking = await newBooking.save();

        res.status(201).json({ 
            message: 'Booking successful!', 
            booking: savedBooking 
        });

    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// User registration
app.post("/register", async (req, resp) => {
    try {
        const { email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).json({ error: 'User already registered' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            email,
            password: hashedPassword
        });
        
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        
        resp.status(201).json({ 
            message: 'User registered successfully',
            user: result 
        });

    } catch (error) {
        console.error('Registration error:', error);
        resp.status(500).json({ error: 'Something Went Wrong' });
    }
});

// User login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful!' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Manager login
app.post('/managerlogin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel5.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // For now, keeping simple password comparison (should be hashed in production)
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.json({ message: 'Manager login successful!' });
    } catch (err) {
        console.error('Manager login error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Display routes
app.get('/displaybooking', async (req, res) => {
    try {
        const bookings = await UserModel.find();
        res.json(bookings);
    } catch (err) {
        console.error('Display bookings error:', err);
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

app.get('/displayuser', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error('Display users error:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.get('/displaymanager', async (req, res) => {
    try {
        const managers = await UserModel5.find();
        res.json(managers);
    } catch (err) {
        console.error('Display managers error:', err);
        res.status(500).json({ error: 'Failed to fetch managers' });
    }
});

app.get('/displayhotel', async (req, res) => {
    try {
        const hotels = await UserModel7.find();
        res.json(hotels);
    } catch (err) {
        console.error('Display hotels error:', err);
        res.status(500).json({ error: 'Failed to fetch hotels' });
    }
});

app.get('/displaypackage', async (req, res) => {
    try {
        console.log('Fetching packages from MongoDB...');
        const packages = await UserModel6.find();
        
        console.log(`Found ${packages.length} packages`);
        const formattedPackages = packages.map(pkg => {
            return {
                ...pkg._doc,
                date: pkg.date
                    ? new Date(pkg.date).toDateString()
                    : "No Date"
            };
        });
        console.log('Sending packages:', formattedPackages);
        console.log("Current DB:", mongoose.connection.db.databaseName);
        res.json(formattedPackages);
    } catch (err) {
        console.error('Display packages error:', err);
        res.status(500).json({ error: 'Failed to fetch packages', details: err.message });
    }
});

// Add routes
app.post("/manager", async (req, res) => {
    try {
        const manager = new UserModel5(req.body);
        const result = await manager.save();
        const managerData = result.toObject();
        delete managerData.password;

        res.status(201).json({ 
            message: 'Manager added successfully',
            manager: managerData 
        });
    } catch (error) {
        console.error('Add manager error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/hotel", async (req, res) => {
    try {
        const hotel = new UserModel7(req.body);
        const result = await hotel.save();
        const hotelData = result.toObject();

        res.status(201).json({ 
            message: 'Hotel booking added successfully',
            hotel: hotelData 
        });
    } catch (error) {
        console.error('Add hotel error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/package", async (req, res) => {
    try {
        const package = new UserModel6(req.body);
        const result = await package.save();
        const packageData = result.toObject();

        res.status(201).json({ 
            message: 'Package added successfully',
            package: packageData 
        });
    } catch (error) {
        console.error('Add package error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete routes
app.delete('/managers/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const managerToDelete = await UserModel5.findOne({ email });

        if (!managerToDelete) {
            return res.status(404).json({ message: 'Manager not found' });
        }

        const deletedManager = await UserModel5.findByIdAndDelete(managerToDelete._id);
        res.status(200).json({ message: 'Manager deleted successfully' });
    } catch (error) {
        console.error('Delete manager error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/deleteHotel/:gname', async (req, res) => {
    try {
        const { gname } = req.params;
        const hotelToDelete = await UserModel7.findOne({ gname });

        if (!hotelToDelete) {
            return res.status(404).json({ message: 'Hotel booking not found' });
        }

        const deletedHotel = await UserModel7.findByIdAndDelete(hotelToDelete._id);
        res.status(200).json({ message: 'Hotel booking deleted successfully' });
    } catch (error) {
        console.error('Delete hotel error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/deletebookings/:number', async (req, res) => {
    try {
        const { number } = req.params;
        const bookingToDelete = await UserModel.findOne({ number });

        if (!bookingToDelete) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const deletedBooking = await UserModel.findByIdAndDelete(bookingToDelete._id);
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Delete booking error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/deletepackages/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const packageToDelete = await UserModel6.findOne({ name });

        if (!packageToDelete) {
            return res.status(404).json({ message: 'Package not found' });
        }

        const deletedPackage = await UserModel6.findByIdAndDelete(packageToDelete._id);
        res.status(200).json({ message: 'Package deleted successfully' });
    } catch (error) {
        console.error('Delete package error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update routes
app.get('/displaybooking1/:number', async (req, res) => {
    const number = req.params.number;
    try {
        const booking = await UserModel.findOne({ number });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        console.error('Get booking error:', err);
        res.status(500).json({ error: 'An error occurred while fetching the booking' });
    }
});

app.put('/updatebooking/:number', async (req, res) => {
    const number = req.params.number;
    const updatedData = req.body;

    try {
        const booking = await UserModel.findOneAndUpdate({ number }, updatedData, { new: true });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        console.error('Update booking error:', err);
        res.status(500).json({ error: 'An error occurred while updating the booking' });
    }
});

app.get('/displaymanager2/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const manager = await UserModel5.findOne({ email });
        if (!manager) {
            return res.status(404).json({ error: 'Manager not found' });
        }
        res.json(manager);
    } catch (err) {
        console.error('Get manager error:', err);
        res.status(500).json({ error: 'Failed to fetch manager' });
    }
});

app.put('/updatemanager/:email', async (req, res) => {
    const email = req.params.email;
    const updatedData = req.body;

    try {
        const manager = await UserModel5.findOneAndUpdate({ email }, updatedData, { new: true });
        if (!manager) {
            return res.status(404).json({ error: 'Manager not found' });
        }
        res.json(manager);
    } catch (err) {
        console.error('Update manager error:', err);
        res.status(500).json({ error: 'An error occurred while updating the manager' });
    }
});

// Search route
app.get('/search', async (req, res) => {
    const searchQuery = req.query.search;

    try {
        const results = await UserModel6.find({ 
            $text: { $search: searchQuery } 
        });
        res.json(results);
    } catch (err) {
        console.error('Search error:', err);
        res.status(500).json({ error: 'An error occurred while searching' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});