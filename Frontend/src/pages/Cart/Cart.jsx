import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const applyPromo = async () => {
    try {
      if (!promoCode.trim()) {
        setError("Please enter a promo code!");
        return;
      }

      const response = await axios.post("http://localhost:4000/api/promo/apply", {
        code: promoCode,
        orderAmount: getTotalCartAmount() + 2 // Include delivery fee
      });

      if (response.data.success) {
        setDiscount(response.data.discountValue);
        setError("");
      } else {
        setDiscount(0);
        setError(response.data.message);
      }
    } catch (error) {
      setDiscount(0);
      setError("Invalid or expired promo code!");
    }
  };

  const finalAmount = Math.max(getTotalCartAmount() + 2 - discount, 0);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>

      <div className="cart-bottom">
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
          <button onClick={() => navigate('/order', { state: { discount } })}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Promo code' value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <button onClick={applyPromo}>Submit</button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
