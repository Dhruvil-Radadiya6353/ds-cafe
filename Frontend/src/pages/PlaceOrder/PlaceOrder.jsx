import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();
  

  const discount = location.state?.discount || 0;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token, getTotalCartAmount, navigate]);

  const onChangeHandler = (event) => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const finalAmount = Math.max(getTotalCartAmount() + 2 - discount, 0);

  const placeOrder = async (event) => {
    event.preventDefault();
    console.log("Placing order...");

    const orderItems = food_list.reduce((acc, item) => {
      if (cartItems[item._id] > 0) {
        acc.push({ ...item, quantity: cartItems[item._id] });
      }
      return acc;
    }, []);

    const orderData = {
      address: formData,
      items: orderItems,
      amount: finalAmount,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });

      if (response.data.success) {
        console.log("Redirecting to:", response.data.session_url);
        window.location.replace(response.data.session_url);
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Order placement error:", error);
      alert("An error occurred while placing the order. Please try again.");
    }
  };

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={formData.firstName} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={formData.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={formData.email} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={formData.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={formData.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={formData.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={formData.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChangeHandler} value={formData.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={formData.phone} type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            {discount > 0 && (
              <>
                <div className="cart-total-details">
                  <p>Discount</p>
                  <p>- ${discount}</p>
                </div>
                <hr />
              </>
            )}
            <div className="cart-total-details">
              <b>Total</b>
              <b>${finalAmount}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
