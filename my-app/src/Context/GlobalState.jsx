import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🛒 Cart and ❤️ Wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ➕ Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // ➕ Add to Wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categoryProducts,
        setCategoryProducts,
        isLoggedIn,
        setIsLoggedIn,
        cart,
        addToCart,
        wishlist,
        addToWishlist
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
