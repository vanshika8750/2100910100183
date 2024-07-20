import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { MdPriceChange, MdCheckCircle, MdClose } from 'react-icons/md';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`inline-block text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  const handleProductClick = (product) => {
    navigate('/product-detail', { state: { product } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Product Results</h1>
      {data.length === 0 ? (
        <p className="text-gray-700 text-xl">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
              <p className="flex items-center text-gray-700 mb-2">
                <MdPriceChange className="mr-1 text-green-500" />
                Price: ${product.price}
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <MdPriceChange className="mr-1 text-red-500" />
                Discount: {product.discount}%
              </p>
              <div className="mb-2 flex items-center">
                <span className="mr-2 text-gray-700">Rating:</span>
                {renderStars(product.rating)}
              </div>
              <p className="flex items-center text-gray-700">
                {product.availability === 'yes' ? (
                  <>
                    <MdCheckCircle className="mr-1 text-green-500" />
                    Available
                  </>
                ) : (
                  <>
                    <MdClose className="mr-1 text-red-500" />
                    Out of Stock
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
