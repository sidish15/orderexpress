import React, { useEffect, useState } from 'react';
// import axios from "axios"
import '../styles/ManufacturerDashboard.css'; // Import the CSS file for styles

const ManufacturerDashboard = () => {
  const [messages,setMessages]=useState([]);
  const [orderID, setOrderId] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [transporter, setTransporter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({orderID,to,from,quantity,address,transporter}),
      });

      // if (!response.ok) {
      //   throw new Error('Message submission failed.');
      // }

      const data = await response.json();
      console.log(data); // Handle successful message submission
if(response.status===201 || data){
  
  window.alert("message sent successfully")
  console.log("message sent successfully")
}
else{
  window.alert("Invalid registration")
  console.log("Invalid registration")
}

 
      // Clear form fields
      setOrderId('');
      setTo('');
      setFrom('');
      setQuantity('');
      setAddress('');
      setTransporter('');
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMessages=async()=>{
    try {
      const response = await fetch('/messages',{
        method:"GET",
        
        credentials:"include"
      });
      const data = await response.json();
      setMessages(data);
    }catch(err){
console.log(err)
}
  }
useEffect(()=>{
fetchMessages();
},[])

  return (
    <>
    {/* Sending  */}
     <div className="manufacturer-dashboard">
      <h2 className="dashboard-heading">Manufacturer Dashboard</h2>
      <div className="message-form-container">
        <h3 className="form-heading">Send Message</h3>
        <form className="message-form" method='POST'>
          <div className="form-group">
            <label className="form-label">Order ID:</label>
            <input type="text" value={orderID} onChange={(e) => setOrderId(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">To:</label>
            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">From:</label>
            <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Quantity:</label>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)} required>
              <option value="">Select Quantity</option>
              <option value="1">1 ton</option>
              <option value="2">2 ton</option>
              <option value="3">3 ton</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label className="form-label">Quantity</label>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div> */}
          <div className="form-group">
            <label className="form-label">Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Transporter:</label>
            <select value={transporter} onChange={(e) => setTransporter(e.target.value)} required>
              <option value="">Select Transporter</option>
              <option value="Transporter 1">Transporter 1</option>
              <option value="Transporter 2">Transporter 2</option>
              <option value="Transporter 3">Transporter 3</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label className="form-label">Transporter</label>
            <input type="text" value={transporter} onChange={(e) => setTransporter(e.target.value)} required />
          </div> */}
          <div className="form-group">
            <button className="submit-button" type="submit" onClick={handleSubmit}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
    <br />
{/* Receiving */}
<h3 className='reply-heading'>Received Messages</h3>
<div className='Manufacture-reply-main'>
  
  {
messages.map((message)=>{
const {orderID,to,from,quantity,address,transporter,price}=message;
return <div className="Manufacture-reply-card">
            <p>Order ID: {orderID}</p>
            <p>To: {to}</p>
            <p>From: {from}</p>
            <p>Quantity: {quantity}</p>
            <p>Address: {address}</p>
            <p>Transporter: {transporter}</p>
            <p>Price: {price}</p>
            <hr />
        </div>
})
  }
</div>
    </>
   
  );
};

export default ManufacturerDashboard;
