import React from 'react';
import './CategoryPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context/GlobalState';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { categoryProducts } = useAppContext();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <h2>{categoryName.toUpperCase()}</h2>
      <div className="product-grid">
        {categoryProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          categoryProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
