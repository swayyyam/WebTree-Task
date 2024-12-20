import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border border-gray-300 rounded-lg p-4 w-96 flex">
        <div className="w-1/3 flex justify-center items-center">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-24 h-24 rounded-md border border-gray-400"
          />
        </div>

        <div className="w-2/3 pl-4">
          <p className="text-lg font-semibold">
            {user.name.first} {user.name.last}
          </p>
          <p className="text-gray-600 mt-1">{user.gender}</p>
          <p className="text-gray-600 mt-1">{user.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
