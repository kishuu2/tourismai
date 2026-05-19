import "../Component/Styles/Admin.css";
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    animationEnabled: true,
	exportEnabled: true,
    theme: "dark1",
    title: {
        text: "Most Buy Packages In Persentage"
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
            { label: "Goa Tour",  y: 23  },
            { label: "Adi Kailash Tour", y: 19  },
            { label: "Best Kasmir", y: 25  },
            { label: "Classic Gujarat",  y: 30  },
            { label: "Manali Tour",  y: 28  }
        ]
    }
    ]
}

export default function Manager() {
     //display data
     const [bookings,setBookings] = useState([])
     const [users,setUsers] = useState([])
     const [manager,setManager] = useState([])
     const [hoteldata,setHoteldata] = useState([])
 
   useEffect(()=>{
     axios.get('https://tourismai-9wfg.onrender.com/displaybooking')
     .then(bookings =>setBookings(bookings.data))
     .catch(err => console.log(err))
   }, [])
 
   useEffect(()=>{
     axios.get('https://tourismai-9wfg.onrender.com/displayuser')
     .then(users =>setUsers(users.data))
     .catch(err => console.log(err))
   }, [])
 
   useEffect(()=>{
     axios.get('https://tourismai-9wfg.onrender.com/displaymanager')
     .then(manager => setManager(manager.data))
     .catch(err => console.log(err))
   },[])
 
 
   //Add Manager
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [days, setDays] = useState("");
   const [nights, setNights] = useState("");
   const [pack, setPack] = useState("");
   const [packages,setPackages] = useState([]);
   const [date,setDate] = useState([]);

   //Add hotel
   const [gname, setGname] = useState("");
   const [pno, setPno] = useState("");
   const [hdays, setHdays] = useState("");
   const [hnights, setHnights] = useState("");
   const [hotel, setHotel] = useState("");
   const [hdate,setHdate] = useState([]);

   const handleSubmit = async (e) => {
     e.preventDefault();
     if (!name || !price || !days || !nights || !date) {
         alert("Please fill in all required fields.");
         return;
       }

     try {
       const response = await fetch('https://tourismai-9wfg.onrender.com/package', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ name, price, days,nights,date}),
       });
   
       if (!response.ok) {
         throw new Error(`Error saving manager: ${await response.text()}`);
       }
   
       const data = await response.json();
   
       if (data) {
            alert('Package Add successfully!');
            // ... clear form fields, redirect, etc.
            
       } else {
         console.warn('Unexpected response from server:', data);
       }
       

     } catch (error) {
       console.error('Error:', error);
       alert('An error occurred. Please try again later.');
     }
   };
   
   const handlehotelSubmit = async (e) => {
    e.preventDefault();
    if (!gname || !hotel || !pno || !hdays || !hnights || !hdate || !roomType) {
        alert("Please fill in all required fields.");
        return;
      }

    try {
      const response = await fetch('https://tourismai-9wfg.onrender.com/hotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gname, hotel, pno, hdays,hnights,hdate,roomType}),
      });
  
      if (!response.ok) {
        throw new Error(`Error saving manager: ${await response.text()}`);
      }
  
      const data = await response.json();
  
      if (data) {
           alert('Hotel saved successfully!');
           // ... clear form fields, redirect, etc.
           
      } else {
        console.warn('Unexpected response from server:', data);
      }
      

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

   const handleDelete1 = async (number) => {
     try {
       console.log(`Deleting Number with bookings: ${number}`); // More informative logging
   
       const response = await axios.delete(`https://tourismai-9wfg.onrender.com/deletebookings/${number}`);
   
       if (response.status === 200) {
         // Improved UI update
         alert('Booking deleted successfully.'); 
       } else {
         throw new Error(`Error deleting Booking (status: ${response.status})`);
       }
     } catch (error) {
       console.error('Error deleting booking:', error);
   
       // Improved error handling for user
       alert('An error occurred while deleting the booking. Please try again later.'); // Or display a more specific error message if available
     }
   };

   useEffect(()=>{
    axios.get('https://tourismai-9wfg.onrender.com/displaypackage')
    .then(packages => setPackages(packages.data))
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    axios.get('https://tourismai-9wfg.onrender.com/displayhotel')
    .then(hotel => setHoteldata(hotel.data))
    .catch(err => console.log(err))
  },[])


   const handleDelete = async (e) => {
    e.preventDefault();
    console.log(pack) 
    try { 
      console.log(`Deleting package with name: ${pack}`); // More informative logging
  
      const response = await axios.delete(`https://tourismai-9wfg.onrender.com/deletepackages/${pack}`);
  
      if (response.status === 200) {
        // Improved UI update
        alert('Package deleted successfully.'); 
      } else {
        throw new Error(`Error deleting Packages (status: ${response.status})`);
      }
    } catch (error) {
      console.error('Error deleting Packages:', error);
  
      // Improved error handling for user
      alert('An error occurred while deleting the Packages. Please try again later.'); // Or display a more specific error message if available
    }
  };
 
  useEffect(() => {
    if (bookings.length > 0) { // Only update packageCounts when bookings change
      const counts = bookings.reduce((acc, booking) => {
        acc[booking.pack] = (acc[booking.pack] || 0) + 1;
        return acc;
      }, {});
      setPackageCounts(counts);
    }
  }, [bookings]);
  const [packageCounts, setPackageCounts] = useState({});

  const [roomType, setRoomType] = useState('AC Room'); // Default value

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };


  const handleDelete2 = async (gname) => {
    try {
      console.log(`Deleting Number with bookings: ${gname}`); // More informative logging
  
      const response = await axios.delete(`https://tourismai-9wfg.onrender.com/deleteHotel/${gname}`);
  
      if (response.status === 200) {
        // Improved UI update
        alert('Booking deleted successfully.'); 
      } else {
        throw new Error(`Error deleting Booking (status: ${response.status})`);
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
  
      // Improved error handling for user
      alert('An error occurred while deleting the booking. Please try again later.'); // Or display a more specific error message if available
    }
  };
  return (
    <>
       
        <div id='accordian'>
        <div className='main row w-100'>
            <div className="col-md-3">
                <div className="sidebar">
                    <div className="all p-2">
                        <div className="">
                        <h1>WeLcOmE !</h1><br/>
                            <a data-bs-toggle="collapse" href="#desh" className="btn2 btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi icon-1 bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                </svg>
                                Dashboard
                            </a>
                            <br/>
                            
                            <a data-bs-toggle="collapse" href="#setting" className="btn2 collapsed btn w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi icon-1 bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                                </svg>
                                Add Packages
                            </a>
                            <br/>
                            <a data-bs-toggle="collapse" href="#hotel" className="btn2 collapsed btn w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi icon-1 bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                            </svg>
                                Hotel Booking
                            </a>
                            <br/>
                            <a data-bs-toggle="collapse" href="#pack" className="btn2 btn collapsed w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi icon-1 bi-card-checklist" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                </svg>
                                Bookings Packages
                            </a>
                            <br/>
                            <a data-bs-toggle="collapse" href="#users" className="btn2 btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi icon-1 bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                                </svg>
                                Users Details
                            </a>
                            <br/>
                            <a data-bs-toggle="collapse" href="#help" className="btn2 btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi icon-1 bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                </svg>
                                Help Center
                            </a>
                            <br/>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                
            </div>
                <div className="right-side col-md">
                        <div className="collapse show p-2" data-bs-parent="#accordian" id="desh">  
                            <h2>Manager Deshboard</h2><br/>
                            <div className="row w-100">
                                    <div className="col-md">
                                        <div className="first_1 border border-info">
                                            <div className="">
                                                <span>Total Customer</span>
                                                <h4>3.5K</h4>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                </svg><span>1.6k from last week</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="first_1 border border-info">
                                            <div className="">
                                                <span>Store Visitors</span>
                                                <h4>9.5K</h4>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                </svg><span>2.6k from last week</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-binoculars-fill" viewBox="0 0 16 16">
                                                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="first_1 border border-info">
                                            <div className="">
                                                <span>Bounce Rate</span>
                                                <h4>34.15%</h4>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                                </svg><span>1.6k from last week</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                                                <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
						    </div>
                            <br/><br/>
                            <div>
                                <CanvasJSChart options = {options} className='chart'/>
                            </div>
                        </div>
                        
                        <div className="collapse p-2" data-bs-parent="#accordian" id="setting">  
                            <div className="row w-100">
                                <div className='col-md-6'>
                                    <h2>Add New Packages</h2><br/>
                                    <form>
                                            <input type="text" value={name} 
                                            onChange={(e) => setName(e.target.value)} className='form-control'  placeholder='Package Title' />
                                            <br />
                                            <input type="number" value={price} 
                                            onChange={(e) => setPrice(e.target.value)} className='form-control'  placeholder='Package Price' />
                                            <br />
                                            <select className='form-control' id='pack' value={pack} onChange={(e) => setPack(e.target.value)}>
                                                <option value="">-----Select Package and Remove-----</option>
                                                {
                                                packages.map(packages => {
                                                    return <option value={packages.name }>{packages.name} --- ₹{packages.price}</option>
                                                })
                                                }
                                            </select><br/>
                                            <div className="d-flex gap-4">
                                                <input type="number" value={days} 
                                                onChange={(e) => setDays(e.target.value)} className='form-control'  placeholder='Stay Days' />

                                                <input type="number" value={nights} 
                                                onChange={(e) => setNights(e.target.value)} className='form-control'  placeholder='Stay Nights' />
                                            </div>
                                            <br />
                                            <input type="date" value={date} 
                                            onChange={(e) => setDate(e.target.value)} className='form-control'  placeholder='Stay Nights' /><br/>

                                            <div className="d-flex gap-4">
                                            <button type="submit" onClick={handleSubmit} className='btn btn-outline-success border border-2 border-primary' >Add New Packages</button>
                                            <button type="button" onClick={handleDelete} className='btn btn-outline-danger ' >delete Packages</button>
                                            </div>
                                    </form>
                                </div>
                                <div className="col-md">
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                                    <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                    </div>

                                    <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Los Angeles" className="d-block w-100 pic1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chicago" className="d-block w-100 pic1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="New York" className="d-block w-100 pic1"/>
                                    </div>
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="collapse p-2" data-bs-parent="#accordian" id="hotel"> 
                            <br/>
                            <div>
                                <div className="con w-100">
                                {Object.entries(packageCounts).map(([packageName, count]) => ( // Use Object.entries
                                    <div key={packageName} className="p-2 all2">
                                    {packageName}
                                    <p>Booking Count: {count}</p>
                                    </div>
                                ))}
                                </div>
                            </div> 
                            <br/>
                            <div id="accordian2">
                            <div className="row w-100">
                                
                                <div className='col-md-6'>
                                    <h2>Book the Hotel</h2><br/>
                                    <form>
                                            <input type="text" value={gname} 
                                            onChange={(e) => setGname(e.target.value)} className='form-control'  placeholder='Guide name' />
                                            <br />
                                            <input type="number" value={pno} 
                                            onChange={(e) => setPno(e.target.value)} className='form-control'  placeholder='Number of Peaople' />
                                            <br />
                                            <select className='form-control' id='pack' value={hotel} onChange={(e) => setHotel(e.target.value)}>
                                                <option value="">-----Select Hotel and booking-----</option>
                                                <option value="Raj Hotel"><a href="">Raj Hotel --- Kedarnath</a></option>
                                                <option value="Queen Hotel"><a href="">Queen Hotel --- Kashmir</a></option>
                                            </select><br/>
                                            <div className="d-flex gap-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="AC Room"
                                                checked={roomType === 'AC Room'} onChange={handleRoomTypeChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">AC Room</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Non-AC Room"
                                                checked={roomType === 'Non-AC Room'} onChange={handleRoomTypeChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">Non-AC Room</label>
                                            </div>
                                            </div>
                                            <br/>
                                            <div className="d-flex gap-4">
                                                <input type="number" value={hdays} 
                                                onChange={(e) => setHdays(e.target.value)} className='form-control'  placeholder='Stay Days' />

                                                <input type="number" value={hnights} 
                                                onChange={(e) => setHnights(e.target.value)} className='form-control'  placeholder='Stay Nights' />
                                            </div>
                                            <br />
                                            <input type="date" value={hdate} 
                                            onChange={(e) => setHdate(e.target.value)} className='form-control'  placeholder='Stay Nights' /><br/>

                                            <div className="d-flex gap-4">
                                            <button type="submit" onClick={handlehotelSubmit} className='btn btn-outline-success border border-2 border-primary' >Request Booking Hotel</button>
                                            </div>
                                    </form>
                                </div>
                                <div className="col-md">
                                <div id="demo1" className="carousel slide" data-bs-ride="carousel">

                                    <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="2"></button>
                                    </div>

                                    <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Los Angeles" className="d-block w-100 pic1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chicago" className="d-block w-100 pic1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="New York" className="d-block w-100 pic1"/>
                                    </div>
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <br/>
                            <div className="table-responsive-lg w-100">
                                    <table className="table w-100 table-dark">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Guide Name
                                                </th>
                                                <th>
                                                    No Of Peaople
                                                </th>
                                                <th>
                                                    Hotel Name
                                                </th>
                                                <th>
                                                    Stay in Hotel
                                                </th>
                                                <th>
                                                    Room Type
                                                </th>
                                                <th>
                                                    Living Date
                                                </th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                hoteldata.map(hotel => {
                                                return <tr>
                                                        <td>{hotel.gname}</td>
                                                        <td>{hotel.pno}</td>
                                                        <td>{hotel.hotel}</td>
                                                        <td>{hotel.hnights} Nights And {hotel.hdays} Days</td>
                                                        <td>{hotel.roomType}</td>
                                                        <td>{hotel.hdate}</td>
                                                        <td>
                                                            <Link className="btn btn-outline-danger w-100" onClick={()=>handleDelete2(hotel.gname)} ><i class="bi bi-trash3"></i></Link>
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        <div className="collapse p-2" data-bs-parent="#accordian" id="pack">  
                            <h1>Bookings Packages</h1>
                                <br/>
                                <div className="table-responsive-lg w-100">
                                    <table className="table w-100 table-dark">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Name
                                                </th>
                                                <th>
                                                    Mobile 
                                                </th>
                                                <th>
                                                    No Of Adults
                                                </th>
                                                <th>
                                                    No Of Children
                                                </th>
                                                <th>
                                                    Packages
                                                </th>
                                                <th>
                                                    Additional
                                                </th>
                                                <th>
                                                    Operations
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                bookings.map(booking => {
                                                return <tr>
                                                        <td>{booking.name}</td>
                                                        <td>{booking.number}</td>
                                                        <td>{booking.anumber}</td>
                                                        <td>{booking.cnumber}</td>
                                                        <td>{booking.pack}</td>
                                                        <td>{booking.additional}</td>
                                                        <td>
                                                            <Link className="btn btn-outline-danger w-100" onClick={()=>handleDelete1(booking.number)}><i class="bi bi-trash3"></i></Link>
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        <div className="collapse p-2" data-bs-parent="#accordian" id="users">  
                            <h1>Users Details</h1>
                            <br/>
                            <table className="table-dark table">
                                <thead>
                                    <tr>
                                        <th>
                                            Users E-mail
                                        </th>
                                        <th>
                                            Users Passwords
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(users => {
                                            return <tr>
                                                <td>{users.email}</td>
                                                <td>{users.password}</td>
                                                <td>{users.date}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="collapse p-2" data-bs-parent="#accordian" id="help">  
                            <h1>Help Center</h1>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}
