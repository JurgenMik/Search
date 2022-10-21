import React, {useState,useEffect} from 'react';
import {MdSearch} from 'react-icons/md';
import axios from 'axios';
import Result from './components/Result';

function App() {

    const [search, setSearch] = useState(null);
    const [view, setView] = useState(false);
    const [searchResult, setResult] = useState({
        name: '',
        age: 0,
        positon: '',
    });

    useEffect(() => {
       const timeout = setTimeout(() => {
           handleGET();
       }, 500);
       return () => clearTimeout(timeout);
    }, [search]);

    const handleGET = () => {
        axios.get('http://localhost:3001/search', {params : {query : search}})
            .then(response => {
                if (Object.keys(response.data.searchResult).length !== 0) {
                    setResult((prev) => response.data.searchResult);
                    setView(true);
                } else {
                    setView(false);
                }
            })
    }

  return (
    <div className="w-full min-h-screen">
        <div className="w-2/3 ml-auto mr-auto mt-24 h-24">
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="text-3xl mb-8 tracking-wide">
                    Search the Tech Industry by full name or position
                </h1>
                <div className="w-2/3 h-full flex flex-row items-center relative">
                    <MdSearch className="absolute text-3xl left-6 text-gray-400" />
                    <input
                      type="text"
                      className="w-full p-6 pl-16 border border-gray-300 rounded-md text-lg placeholder-black tracking-widest"
                      name="search"
                      placeholder="Search from the database..."
                      onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-center">
                    {view ? <Result data={searchResult} /> : null}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
