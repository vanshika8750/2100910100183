import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { MdPriceChange, MdCheckCircle, MdClose } from 'react-icons/md';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`inline-block text-lg ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * (discount / 100));
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {product ? (
          <>
            <h1 className="text-4xl font-bold mb-4">{product.productName}</h1>
            <div className="flex items-center mb-4">
              <p className="text-xl font-semibold mr-4">Price:</p>
              <span className="text-2xl font-bold text-green-600">${calculateDiscountedPrice(product.price, product.discount)}</span>
              <p className="text-xl ml-4 line-through text-gray-500">${product.price}</p>
            </div>
            <p className="text-xl mb-4">Discount: {product.discount}%</p>
            <div className="mb-4">
              <span className="text-xl font-semibold">Rating:</span>
              <div className="inline-flex ml-2">
                {renderStars(product.rating)}
                <span className="ml-2 text-xl">{product.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-xl mb-4">
              Availability: {product.availability === 'yes' ? (
                <>
                  <MdCheckCircle className="inline mr-1 text-green-500" />
                  Available
                </>
              ) : (
                <>
                  <MdClose className="inline mr-1 text-red-500" />
                  Out of Stock
                </>
              )}
            </p>
            <p className="text-lg">Description: {product.description || 'No description available.'}</p>
          </>
        ) : (
          <p className="text-gray-700 text-xl">Product not found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
