// src/pages/Wishlist.jsx
import React from 'react';
import { useAppContext } from '../Context/GlobalState';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
