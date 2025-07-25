import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../Context/GlobalState';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const {
    categoryProducts,
    addToCart,
    addToWishlist
  } = useAppContext();

  const product = categoryProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className="product-detail">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    alert(`${product.name} added to wishlist!`);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>

        <div className="product-actions">
          <button onClick={handleAddToCart} className="cart-btn">Add to Cart</button>
          <button onClick={handleAddToWishlist} className="wishlist-btn">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
