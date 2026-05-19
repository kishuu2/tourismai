import React, { useEffect, useState } from 'react'
import "../Component/Styles/package.css"
import first from "../images/Destination/Packages-image.jpg"
import $ from 'jquery';
import axios from 'axios';
import { destination} from "./images";
import { Link} from "react-router-dom";
const Foregin = () => {
  $(document).ready(function () {
    $(".block").slice(0, 1).show();
    if ($(".block:hidden").length !== 0) {
        $("#load").show();
    }
    $("#load").on("click", function (e) {
        e.preventDefault();
        $(".block:hidden").slice(0, 1).slideDown();
        if ($(".block:hidden").length === 0) {
            $("#load").text("No More to view").fadeOut("slow");
        }
    });
  })

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [anumber, setAnumber] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [additional, setAdditional] = useState("");
  const [pack, setPack] = useState("");
  const [packages,setPackages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !number || !anumber || !cnumber) {
      alert("Please fill in all required fields.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/booking', {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, number, anumber, cnumber, pack, additional})
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Data sent successfully!");
      } 
      else {
        if (response.status === 400) {
          alert("Invalid form data.");
        } else {
          alert("An error occurred. Please try again later.");
        }
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
    
    const totalNights = packages.reduce((acc, curr) => acc + curr.nights, 0);
    const totalDays = packages.reduce((acc, curr) => acc + curr.days, 0);

    const total = packages.reduce((acc, curr) => acc + curr.price, 0);

        const dataToDownload = `Thanks for Visiting Enjoy Your Trip
-----------------------------------------
        \nName: ${name}
        \nMobile Number: ${number}
        \nNo Of Adults: ${anumber}
        \nNo Of Children: ${cnumber}
        \nYour Package: ${pack}
        \nAdditional Requirement: ${additional}
        \nWe are Stay in Nights ${totalNights} and ${totalDays} Days
        \nTotal Rupees: ${total}
-----------------------------------------
        `;

        const blob = new Blob([dataToDownload], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ticket.txt';
        a.click();
    
        URL.revokeObjectURL(url);
    
  };

  useEffect(()=>{
    axios.get('http://localhost:5000/displaypackage')
    .then(packages => setPackages(packages.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete1 = async (e) => {
    e.preventDefault();

    try {
      console.log(`Deleting Number with bookings: ${number}`); // More informative logging
  
      const response = await axios.delete(`http://localhost:5000/deletebookings/${number}`);
  
      if (response.status === 200) {
        // Improved UI update
        alert('Booking deleted successfully.'); 
      } else {
        throw new Error(`Error deleting Booking (status: ${response.status})`);
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('An error occurred while deleting the booking. Please try again later.'); // Or display a more specific error message if available
    }
  };

  const [bookingData, setBookingData] = useState({
    name: '',
    anumber: '',
    cnumber: '',
    additional: '',
    pack: '',
  });

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(`http://localhost:5000/displaybooking1/${number}`);
        if (response.ok) {
          const data = await response.json();
          setBookingData(data);
          console.log("Fetch");
        } else {
          console.error('Error fetching booking:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    if (number) {
      fetchBooking();
    }
  }, [number]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/updatebooking/${number}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        const updatedBooking = await response.json();
        setBookingData(updatedBooking);
        alert('Booking updated successfully!');
        console.log("Data update");
      } else {
        console.error('Error updating booking:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating booking:', error);
    }

  };
  return (
    <>
        <div className="main2">
          <div className="head">
            <img src={first} alt='' className='img-fluid mx-auto p-head d-block'/>
            <div className="text text-light">
              <span id='p-h1'>It's Time For New</span><br/>
              <span id='p-h2'>Experiences</span>
            </div>
          </div>
          <br/>


          <div id='accordian'>
            <div className="row w-100">
                      <div className='col-md-4'>
                        <div className="without-fixed">
                                <div className='row w-100'>
                                    <a className="text3" data-bs-toggle='collapse' href="#location1">
                                        <div className="one-pa bg-dark">
                                            <p id='holiday-pa'>Goa Holiday Packages</p>
                                            <div className="pac-1">
                                              <div className="1-pack">
                                                <span id='pa-2'>Starting from ₹ 8,900</span><br />
                                                <span id='pa-2'>3 NIIGHT, 4 DAYS</span><br/>
                                                <span id='pa-2'>Travel Date: Sat Oct 28 2024</span>
                                              </div>
                                              <div className="pack-logo">
                                                <img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG-Photo.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                                <img src="https://icon-library.com/images/meal-icon-png/meal-icon-png-19.jpg" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                                <img src="https://cdn1.iconfinder.com/data/icons/adventure-42/100/adventure-39-512.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                                <img src="https://th.bing.com/th/id/R.35688fa58bc6cdbecd6f08d67e3911f5?rik=owQ0MTKW5Mx2fQ&riu=http%3a%2f%2fwww.downloadclipart.net%2fmedium%2f8476-four-wheel-drive-road-black-clip-art.png&ehk=x%2beAU6ZP43%2f5e%2bCPyYulJ2gO81MxB6RLJjc4Wc6I9K0%3d&risl=&pid=ImgRaw&r=0" alt="first-logo" className='img-fluid logo-1 mx-auto d-block' />
                                              </div>
                                            </div><br />
                                            <div className="down-pc">
                                              <span>RATE PER PERSON ON TWIN SHARING</span>
                                            </div>
                                        </div>
                                    </a>
                                  </div>
                                    <br/>
                                  <div className='row w-100'>
                                    <a className=" text3" data-bs-toggle='collapse' href="#location2">
                                      <div className="one-pa bg-dark">
                                        <p id='holiday-pa'>Manali Holiday Packages</p>
                                        <div className="pac-1">
                                          <div className="1-pack">
                                            <span id='pa-2'>Starting from ₹ 5,499</span><br />
                                            <span id='pa-2'>4 NIIGHT, 5 DAYS</span><br/>
                                            <span id='pa-2'>Travel Date: Sat Oct 28 2024</span>
                                          </div>
                                          <div className="pack-logo">
                                            <img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG-Photo.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                            <img src="https://icon-library.com/images/meal-icon-png/meal-icon-png-19.jpg" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                            <img src="https://cdn1.iconfinder.com/data/icons/adventure-42/100/adventure-39-512.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                            <img src="https://th.bing.com/th/id/R.35688fa58bc6cdbecd6f08d67e3911f5?rik=owQ0MTKW5Mx2fQ&riu=http%3a%2f%2fwww.downloadclipart.net%2fmedium%2f8476-four-wheel-drive-road-black-clip-art.png&ehk=x%2beAU6ZP43%2f5e%2bCPyYulJ2gO81MxB6RLJjc4Wc6I9K0%3d&risl=&pid=ImgRaw&r=0" alt="first-logo" className='img-fluid logo-1 mx-auto d-block' />
                                          </div>
                                        </div><br />
                                        <div className="down-pc">
                                          <span>RATE PER PERSON ON TWIN SHARING</span>
                                        </div>
                                      </div>
                                    </a>  
                                </div>
                                <br/>
                                  {
                                    packages.map(packages => {
                                      return <div className="block">
                                    <div className="row w-100">
                                    <Link className="text3" to='/Details'>
                                      <div className="one-pa bg-dark text-light">
                                      
                                      <p id='holiday-pa'>{packages.name}</p>
                                        <div className="pac-1">
                                          <div className="1-pack">
                                            <span id='pa-2'>Staring from ₹ {packages.price}</span><br/>
                                            <span id='pa-2'>Duraction: {packages.nights}NIGHTS , {packages.days}DAYS</span><br/>
                                            <span id='pa-2'>Travel Date: {packages.date}</span>
                                          </div>
                                          <div className="pack-logo">
                                            <img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG-Photo.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                            <img src="https://icon-library.com/images/meal-icon-png/meal-icon-png-19.jpg" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                            <img src="https://cdn1.iconfinder.com/data/icons/adventure-42/100/adventure-39-512.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                                          </div>
                                        </div><br/>
                                        <div className="down-pc">
                                        <span>RATE PER PERSON ON TWIN SHARING</span>
                                      </div>
                                      </div>
                                    </Link>
                                  </div><br/>
                                  </div>
                                  
                                  })
                                  }
                                
                                <button type='button' id='load' className='btn btn-primary border border-2 border-dark btn3'>Load More</button>
                              
                        </div>
                      </div>
                       
                      <div className="col-md with-fixed1">
                        
                      <h3>Just Booking Your Package And Download Ticket</h3>
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
                      <div className="col-md">
                          <div className='with-fixed'>
                          <form action='' autoComplete='on'>
                            <input type="text" value={name} 
                            onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' className='form-control'/><br/>
                            <input type="number" value={number} 
                            onChange={(e) => setNumber(e.target.value)} placeholder='Enter Your Contact Number' className='form-control'/><br/>
                            <div className="d-flex gap-2">
                            <input type="number" value={anumber} 
                            onChange={(e) => setAnumber(e.target.value)} placeholder='Enter Number of Adult' className='form-control'/>
                            <input type="number" value={cnumber} 
                            onChange={(e) => setCnumber(e.target.value)} placeholder='Enter Number of Child' className='form-control'/><br/>
                            </div>
                            <br/>
                            <select className='form-control' id='pack' value={pack} onChange={(e) => setPack(e.target.value)}>
                            <option value="">-----Select Option-----</option>
                            {
                              packages.map(packages => {
                                return <option value={packages.name +" --- ₹"+packages.price}>{packages.name} --- ₹{packages.price}</option>
                              })
                            }
                            </select>
                            <br/>
                            <textarea value={additional} placeholder='Additional Message'
                            onChange={(e) => setAdditional(e.target.value)} cols='50' className='form-control' rows='5'></textarea>
                            <br/><br/>
                            <div className='d-flex gap-3'>
                              <button type='submit' onClick={handleSubmit} className='btn w-100 btn-outline-primary'>Download Ticket</button>
                              <button onClick={handleDelete1} className='btn w-100 btn-outline-danger'>Cancle Booking</button>
                            </div>
                            <br/>
                            <button onClick={handleUpdate} className='btn w-100 btn-outline-warning'>Edit Booking</button>
                          </form>
                          </div>
                      </div>
                     
            </div>
          </div>

          <br/>
          <div className="location p-4">
            <h1>Our Office</h1>
            <p>You Can Meet Person and Book Your Ticket Enjoy Traveling...!</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2121846878154!2d72.76343207514442!3d21.147766980531518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d52f109ff77%3A0x4e31edf2a8b2318b!2sPrime%20Shoppers!5e1!3m2!1sen!2sin!4v1726304409450!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" />
          </div>
          <br/><br/>
          <div className="images w-100 p-4">
            <div className="d-flex gap-2 w-100">
              <div>
              <img src={destination[3]} alt="" className='img-fluid mx-auto d-block'/>
              </div>
              <div>
              <img src={destination[5]} alt="" className='img-fluid mx-auto d-block'/>
              </div>
              <div>
              <img src={destination[2]} alt="" className='img-fluid mx-auto d-block'/>
              </div>
              <div>
              <img src={destination[4]} alt="" className='img-fluid mx-auto d-block'/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Foregin;