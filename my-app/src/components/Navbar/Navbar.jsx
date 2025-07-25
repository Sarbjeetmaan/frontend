import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/GlobalState';

import searchIcon from '../../assets/icons/search.png';
import cartIcon from '../../assets/icons/shopping-cart.png';
import userIcon from '../../assets/icons/login-avatar.png';
import wishlist from '../../assets/icons/love.png';

export const Navbar = () => {
  const navigate = useNavigate();
  const {
    selectedCategory,
    setSelectedCategory,
    setCategoryProducts,
    isLoggedIn,
  } = useAppContext();

  const [showPrompt, setShowPrompt] = useState(false);
  const [promptTarget, setPromptTarget] = useState(null);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      const module = await import(`../../assets/products/${category}/${category}.js`);
      setCategoryProducts(module.default);
    } catch (err) {
      console.error(`No products found for "${category}"`, err);
      setCategoryProducts([]);
    }
    navigate(`/category/${category}`);
  };

  const handleProtectedClick = (target) => {
    if (isLoggedIn) {
      navigate(`/${target}`);
    } else {
      setPromptTarget(target);
      setShowPrompt(true);
    }
  };

  const handleGoToLogin = () => {
    setShowPrompt(false);
    navigate('/login');
  };

  const categories = [
    "airpods", "camera", "earphones", "mobile", "mouse",
    "printers", "processor", "refrigerator", "speakers",
    "trimmers", "tv", "watches"
  ];

  return (
    <>
      <div className="navbar">
        <a href="/" className="brand-name">El<span className="dot">•</span>oc</a>

        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search for products, brands and more" />
        </div>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => navigate('/login')}>
            <img src={userIcon} alt="Login" className="nav-icon" />
            <span>Login</span>
          </button>

          <button className="nav-btn" onClick={() => handleProtectedClick('cart')}>
            <img src={cartIcon} alt="Cart" className="nav-icon" />
            <span>Cart</span>
          </button>

          <button className="nav-btn" onClick={() => handleProtectedClick('cart')}>
            <img src={wishlist} alt="Wishlist" className="nav-icon" />
            <span>Wishlist</span>
          </button>
        </div>
      </div>

      <div className="categories-bar">
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={selectedCategory === cat ? "active-category" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </span>
        ))}
      </div>

      {showPrompt && (
        <div className="login-popup">
          <p>You must log in to access your {promptTarget}.</p>
          <button onClick={handleGoToLogin}>Go to Login</button>
          <button onClick={() => setShowPrompt(false)}>Cancel</button>
        </div>
      )}
    </>
  );
};
