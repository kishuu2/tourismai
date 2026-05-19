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

export default function Admin() {
    //display data
    const [bookings,setBookings] = useState([])
    const [users,setUsers] = useState([])
    const [manager,setManager] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/displaybooking')
    .then(bookings =>setBookings(bookings.data))
    .catch(err => console.log(err))
  }, [])

  useEffect(()=>{
    axios.get('http://localhost:5000/displayuser')
    .then(users =>setUsers(users.data))
    .catch(err => console.log(err))
  }, [])

  useEffect(()=>{
    axios.get('http://localhost:5000/displaymanager')
    .then(manager => setManager(manager.data))
    .catch(err => console.log(err))
  },[])


  //Add Manager
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confrim, setConfirm] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confrim || !username) {
        alert("Please fill in all required fields.");
        return;
      }
  
    if (password !== confrim) {
      alert("Passwords don't match.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/manager', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });
  
      if (!response.ok) {
        throw new Error(`Error saving manager: ${await response.text()}`);
      }
  
      const data = await response.json();
  
      if (data) {
        alert('Data saved successfully!');
        // ... clear form fields, redirect, etc.
      } else {
        console.warn('Unexpected response from server:', data);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  
  const handleDelete = async (email) => {
    try {
      console.log(`Deleting manager with email: ${email}`); // More informative logging
  
      const response = await axios.delete(`http://localhost:5000/managers/${email}`);
  
      if (response.status === 200) {
        // Improved UI update
        alert('Manager deleted successfully.'); // Or use a toast notification
        // Update UI to reflect deletion (e.g., remove row from list)
      } else {
        throw new Error(`Error deleting manager (status: ${response.status})`);
      }
    } catch (error) {
      console.error('Error deleting manager:', error);
  
      // Improved error handling for user
      alert('An error occurred while deleting the manager. Please try again later.'); // Or display a more specific error message if available
    }
  };

  const handleDelete1 = async (number) => {
    try {
      console.log(`Deleting Number with bookings: ${number}`); // More informative logging
  
      const response = await axios.delete(`http://localhost:5000/deletebookings/${number}`);
  
      if (response.status === 200) {
        // Improved UI update
        alert('Booking deleted successfully.'); // Or use a toast notification
        // Update UI to reflect deletion (e.g., remove row from list)
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
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">   
                <div class="modal-body">
                    
                <h5 class="modal-title text-light">Please fill the details and confrimation emlpoye data.....</h5><br/><br/>
                                <form autoComplete='off' action=''>
                                    <input type="email" value={email} 
                                    onChange={(e) => setEmail(e.target.value)} className='form-control'  placeholder='Manager E-mail' />
                                    <br />
                                    <input type="text" value={username} 
                                    onChange={(e) => setUsername(e.target.value)} className='form-control'  placeholder='Manager Unique Name' />
                                    <br/>
                                    <input type="password" value={password} 
                                    onChange={(e) => setPassword(e.target.value)} className='form-control' id='create' placeholder='Create Password' />
                                    <br/>
                                    <input type="password" value={confrim}
                                    onChange={(e) => setConfirm(e.target.value)} className='form-control' placeholder='Confirm Password'/>
                                    <span id='matched'>Password Does not Matched!</span>
                                    <br/><br/>
                                    
                                    <br />
                                    <div className="d-flex gap-4">
                                        <button type="submit" onClick={handleSubmit} className='btn btn-outline-success border border-2 w-100 border-primary' >Add Manager Or Employe</button>
                                    </div>
                            </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger w-100" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>

        <br/>
        <div id='accordian'>
        <div className='main row w-100'>
            <div className="col-md-3">
                <div className="sidebar">
                    <div className="all p-2">
                        <div className="">
                        <h1>WeLcOmE !</h1><br/>
                            <a data-bs-toggle="collapse" href="#desh" className="btn2 btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                </svg>
                                Dashboard
                            </a>
                            <br/>
                            
                            <a data-bs-toggle="collapse" href="#setting" className="btn2 collapsed btn w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                                </svg>
                                Managers Or Employee
                            </a>
                            
                            <br/>
                            <a data-bs-toggle="collapse" href="#pack" className="btn2 btn collapsed w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                </svg>
                                Bookings Packages
                            </a>
                            <br/>
                            <a data-bs-toggle="collapse" href="#users" className="btn2 btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                                </svg>
                                Users Details
                            </a>
                            <br/>
                            <a data-bs-toggle="collapse" href="#help" className="btn2 btn w-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
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
                            <h1>Deshboard</h1>
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
                            <h1>Add Manager Or Employee</h1>
                            <br/><br/>
                            <div className='d-flex gap-2'>
                            <button type='button' data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-outline-primary">Add Manager Or Employee</button>
                            <Link to='/UpdateManager' className="btn btn-outline-warning">Edits Manager Or Employee</Link>    
                            </div>   
                                <br/><br/>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>
                                            E-mail
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Password
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Operations
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        manager.map(manager => {
                                            return <tr>
                                                <td>{manager.email}</td>
                                                <td>{manager.username}</td>
                                                <td>{manager.password}</td>
                                                <td>{manager.date}</td>
                                                <td>
                                                    <div className="d-flex gap-3">
                                                    <Link className="btn btn-outline-danger" onClick={()=>handleDelete(manager.email)}>Delete Record</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
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
                                        <th>
                                            Operations
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
                                                <td>
                                                    <Link className="btn btn-outline-danger">Delete</Link>
                                                </td>
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
