import React, { useState } from 'react';
import stsearch from '../assets/css/stsearch.module.css';

function SearchBar() {
    const [searchTerm, setSearch] = useState('');
    const handleChange = (event) =>{
        setSearch(event.target.value);
    }
    const handleSubmit = () =>{
        console.log(searchTerm);
    }
    return (
      <div className={stsearch.maindiv}>
        <input value={searchTerm} onChange={handleChange} className={stsearch.inputbar} type="text" placeholder="Search..."/>
        <button onSubmit={handleSubmit} className={stsearch.btn}>Search</button>
      </div>
    );
}

export default SearchBar;