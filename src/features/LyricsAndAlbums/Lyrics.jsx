import { songs } from "../../data/songs";
import LyricsItem from "./components/LyricsItem/LyricsItem";
import './Lyrics.style.css'
import { Dancing } from "../../assets";
import { useState } from "react";
import Button from '../../components/Button/Button'
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";

const Lyrics = () => {
    const [selectedGroup, setSelectedGroup] = useState('All');
    const [results, setResults] = useState([]);

    const filteredSongs = selectedGroup === 'All' ? songs : songs.filter((songs) => songs.genre === selectedGroup);

    return (
        <div className="lyrics">
            <div className="lyrics-title">
                <div className="lyrics-title-text">
                    <h1>Dive in to the world of music and lyrics</h1>
                    <hr />
                    <p>Get all the information on your favorite tracks.
                        Let yourself get lost in all the amazing lyrics, written by your favorite artists.</p>
                </div>
                <Dancing />
            </div>
            <div className="searchBar-sorting">
                <h2>Let's explore!</h2>
                <SearchBar setResults={setResults} />
                <SearchResult results={results} />
                <hr />
                <div className="sorting">
                    <Button buttonText='All' className={selectedGroup === 'All' ? 'active' : ''} onClick={() => setSelectedGroup('All')} />
                    <Button buttonText='Pop' className={selectedGroup === 'Pop' ? 'active' : ''} onClick={() => setSelectedGroup('Pop')} />
                    <Button buttonText='Rock' className={selectedGroup === 'Rock' ? 'active' : ''} onClick={() => setSelectedGroup('Rock')} />
                    <Button buttonText='R&B' className={selectedGroup === 'R&B' ? 'active' : ''} onClick={() => setSelectedGroup('R&B')} />
                    <Button buttonText='K-Pop' className={selectedGroup === 'K-Pop' ? 'active' : ''} onClick={() => setSelectedGroup('K-Pop')} />
                    <Button buttonText='HipHop' className={selectedGroup === 'HipHop' ? 'active' : ''} onClick={() => setSelectedGroup('HipHop')} />
                </div>
            </div>
            <div className="songs-list">
                {filteredSongs.map((song) => (
                    <div>
                        <LyricsItem song={song} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lyrics;