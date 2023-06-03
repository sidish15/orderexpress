import React, { useEffect, useState } from 'react';
import "../styles/TransporterDashboard.css"
const TransporterDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchMessages();
    
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/messages',{
        method:"GET",
        // headers:{
        //   Accept:"application/json",
        //   "Content-type":"application/json"
        // },
        credentials:"include"
      });
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReply = async (orderID) => {
    const replyData = {
      orderID,
      price,
    };
console.log("handleReply called")
    try {
      await fetch('/messages/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(replyData),
      });
      setPrice("")
      //for update the messages
      fetchMessages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='transporter-dashboard'>
      <h2>Transporter Dashboard</h2>
      <h3>Received Messages</h3>
      <ul>
        {
        messages.map((message) => {
    const {orderID,to,from,quantity,address,transporter,price}=message;
         return( <form key={orderID} method='GET'>
            <div className="message-details" >
              <strong>Order ID:</strong> {orderID}
              <br />
              <strong>To:</strong> {to}
              <br />
              <strong>From:</strong> {from}
              <br />
              <strong>Quantity:</strong> {quantity} ton
              <br />
              <strong>Address:</strong> {address}
              <br />
              <strong>Transporter:</strong> {transporter}
              <br/>
              <strong>Price:</strong> {message.price}
            </div>

            <div className="reply-form">
              <label>Price:</label>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
              <button onClick={() => handleReply(orderID)}>Reply</button>
            </div>
          </form>)
})
        }

      </ul>
    </div>
  );
};

export default TransporterDashboard;
