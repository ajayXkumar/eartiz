import React, { useState, useContext } from 'react';
import { Cartcontext } from '../context/shopcartcontext';
import axios from 'axios';
const Order = () => {
  const { cartItem } = useContext(Cartcontext);

  // Create an array of product objects from cartItem
  const products = cartItem.map((item) => ({
    name: item.name,
    slug: item.slug, // Adjust this property based on your product structure
    category: item.category, // Adjust this property based on your product structure
    image: item.image,
    price: item.price,
  }));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    pincode: '',
    products: products, // Initialize products with the cartItem data
  });

  const { name, email, city, pincode } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:8000/orders', formData)
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        window.alert('Order placed successfully!'); 
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };
  


  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default Order;
