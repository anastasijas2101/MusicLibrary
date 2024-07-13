import './SearchBar.style.css'
import search from '../../../../assets/search.webp'
import { useState } from 'react'
import songs from '../../../../data/songs'

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        const results = songs.filter(song => song.title.toLowerCase().includes(value.toLowerCase()))
        setResults(results);
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value)
    }

    return (
        <div className="searchBar">
            <input type="text" value={input} onChange={(e) => handleChange(e.target.value)} placeholder="Enter song name" />
            <img src={search} alt="search" />
        </div>
    )
}

export default SearchBar;