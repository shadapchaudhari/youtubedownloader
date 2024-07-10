import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Main = () => {
  const [link, setLink] = useState('');
  const [quality, setQuality] = useState('360p'); // Default quality
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (link.trim()) {
      try {
        const response = await axios.post('http://localhost/Youtube/back/index.php', {
          link: link,
          quality: quality,
        });
        if (response.status === 200) {
          // Handle successful response
          console.log('Download successful:', response.data);
          // Clear the input fields
          setLink('');
          setQuality('360p');
        } else {
          console.error('Failed to download video:', response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleQualitySelect = (selectedQuality) => {
    setQuality(selectedQuality);
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="Box md:h-96 h-72 w-full flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="Box w-full max-w-md flex flex-col items-center text-center space-y-4">
        <input
          type="text"
          placeholder="Enter YouTube link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="relative w-full">
          <button
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            onClick={toggleDropdown}
          >
            {quality} <span className="ml-2">&#x25bc;</span>
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={() => handleQualitySelect('240p')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  240p
                </button>
                <button
                  onClick={() => handleQualitySelect('360p')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  360p
                </button>
                <button
                  onClick={() => handleQualitySelect('480p')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  480p
                </button>
                <button
                  onClick={() => handleQualitySelect('720p')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  720p
                </button>
                <button
                  onClick={() => handleQualitySelect('1080p')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  1080p
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="h-12 w-full bg-red-500 rounded-md text-white text-sm"
        >
          Download
        </button>
      </form>
    </div>
  );
};

export default Main;
