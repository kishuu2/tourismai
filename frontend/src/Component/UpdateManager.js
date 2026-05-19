import React, { useState, useEffect } from 'react';
import "../Component/Styles/Admin.css"
export default function UpdateManager(managerId) {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [managerData, setManagerData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(`https://tourismai-9wfg.onrender.com/displaymanager2/${email}`);
        if (response.ok) {
          const data = await response.json();
          setManagerData(data);
          console.log("Fetch");
        } else {
          console.error('Error fetching booking:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    if (email) {
      fetchBooking();
    }
  }, [email]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://tourismai-9wfg.onrender.com/updatemanager/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(managerData)
      });

      if (response.ok) {
        const updatedBooking = await response.json();
        setManagerData(updatedBooking);
        alert('Booking updated successfully!');
        console.log("Data update");
      } else {
        console.error('Error updating manager:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating manager:', error);
    }

  };

  return (
    <div className='update'>
      {/* Form for updating manager data */}
      <form action='' autoComplete='on'>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className='form-control' id='pack' value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            className='form-control' id='pack' value={username} onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password"
            className='form-control' id='pack' value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br/>
        
        <button className='btn btn-warning w-100' onClick={handleUpdate}>Edit Manager or Employee</button>
      </form>
    </div>
  );
}