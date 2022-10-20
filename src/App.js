import React from 'react';
import {MdSearch} from 'react-icons/md'

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-2/3 ml-auto mr-auto mt-24 h-24">
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-3xl mb-8 tracking-wide">
              Search for People in the Tech industry
            </h1>
            <div className="w-2/3 h-full flex flex-row items-center relative">
              <MdSearch className="absolute text-3xl left-6 text-gray-400"/>
              <input
                  type="text"
                  className="w-full p-6 pl-16 border border-gray-300 rounded-full text-lg placeholder-black tracking-widest"
                  name="search"
                  placeholder="Search from the database..."
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
