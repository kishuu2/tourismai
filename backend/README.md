# Tourism Management Backend

This is the backend API for the Tourism Management System built with Node.js, Express, and MongoDB Atlas.

## Setup Instructions

### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new cluster (M0 Free tier is sufficient)
3. Set up database access:
   - Create a database user with username and password
   - Note down the username and password
4. Set up network access:
   - Add your IP address or use `0.0.0.0/0` for all IPs (for development)
5. Get your connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

### 2. Environment Configuration

1. Copy the sample environment file:
   ```bash
   cp config.env.example config.env
   ```

2. Update the `config.env` file with your MongoDB Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/tourist_db?retryWrites=true&w=majority
   ```

3. Replace the following in the connection string:
   - `your_username` with your MongoDB Atlas username
   - `your_password` with your MongoDB Atlas password
   - `your_cluster` with your actual cluster name
   - `tourist_db` is the database name (you can change this)

4. Update other environment variables as needed:
   - `PORT` - Server port (default: 5000)
   - `JWT_SECRET` - Secret key for JWT tokens
   - `CORS_ORIGIN` - Frontend URL (default: http://localhost:3000)

### 3. Install Dependencies

```bash
cd Backend
npm install
```

### 4. Start the Server

For development (with auto-restart):
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start on port 5000 (or the port specified in config.env).

## API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /login` - User login
- `POST /managerlogin` - Manager login

### Bookings
- `POST /booking` - Create new booking
- `GET /displaybooking` - Get all bookings
- `GET /displaybooking1/:number` - Get booking by phone number
- `PUT /updatebooking/:number` - Update booking
- `DELETE /deletebookings/:number` - Delete booking

### Managers
- `POST /manager` - Add new manager
- `GET /displaymanager` - Get all managers
- `GET /displaymanager2/:email` - Get manager by email
- `PUT /updatemanager/:email` - Update manager
- `DELETE /managers/:email` - Delete manager

### Packages
- `POST /package` - Add new package
- `GET /displaypackage` - Get all packages
- `DELETE /deletepackages/:name` - Delete package
- `GET /search?search=query` - Search packages

### Hotels
- `POST /hotel` - Add hotel booking
- `GET /displayhotel` - Get all hotel bookings
- `DELETE /deleteHotel/:gname` - Delete hotel booking

## Environment Variables

Create a `config.env` file in the Backend directory with:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/tourist_db?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (for future authentication)
JWT_SECRET=your_jwt_secret_key_here

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## Security Features

- Password hashing using bcryptjs
- CORS configuration
- Environment variable management
- Error handling middleware
- Input validation

## Database Models

- **Users** - User accounts with email and hashed passwords
- **Bookings** - Tour package bookings
- **Managers** - Manager accounts
- **Packages** - Tour packages
- **Hotels** - Hotel bookings

## Notes

- Make sure to replace the MongoDB Atlas connection string with your actual credentials
- The server runs on port 5000 by default
- All passwords are hashed using bcryptjs for security
- CORS is configured to allow requests from localhost:3000 (React frontend) 