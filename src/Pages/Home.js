import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [top, setTop] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();

  const companies = ['AMZ', 'FLP', 'SNP','MYN','AZO']; 
  const categories = ['Phone', 'Computer', 'TV','Earphone','Tablet','Charger','Mouse','Keypad','Bluetooth','Pendrive','Remote','Speaker','Headset','Laptop','PC'];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxNDU3NjkyLCJpYXQiOjE3MjE0NTczOTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUwZmEyMzJmLWMyZGUtNDIzZi04NzE5LTEwMGVlYTU2MmRkMiIsInN1YiI6InZhbnNoaWthamFpbjg3NTBAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJlMGZhMjMyZi1jMmRlLTQyM2YtODcxOS0xMDBlZWE1NjJkZDIiLCJjbGllbnRTZWNyZXQiOiJGVW1xT0lDWGZCaVhnaUJkIiwib3duZXJOYW1lIjoiVmFuc2hpa2EgSmFpbiIsIm93bmVyRW1haWwiOiJ2YW5zaGlrYWphaW44NzUwQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxMDA5MTAxMDAxODMifQ.uLbFiBWx0EKvDl5ashXCMWybbczmuCoF4qvRY2eU4Wc';
  
    try {
      const response = await axios.get(`/test/companies/${company}/categories/${category}/products`, {
        params: {
          top: top,
          minPrice: minPrice,
          maxPrice: maxPrice
        },
        headers: {
          Authorization: token
        }
      });
      console.log(response.data);
      navigate('/results', { state: { data: response.data } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4"><h1>Welcome to GoMart</h1></h2>
        <div className="mb-4">
          <label className="block text-gray-700">Company</label>
          <select
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">Select Company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Top N Products</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={top}
            onChange={(e) => setTop(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Price</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Maximum Price</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
