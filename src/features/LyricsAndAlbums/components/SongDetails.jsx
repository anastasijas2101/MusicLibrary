import { useParams } from 'react-router-dom';
import './SongDetails.style.css'
import { useEffect, useState } from 'react';
import songs from '../../../data/songs'

const SongDetails = () => {
    const { id } = useParams();
    const [song, setSong] = useState(null);

    useEffect(() => {
        const getSong = (id) => {
            const foundSong = songs.find((song) => song.id === Number(id))
            if (foundSong) {
                setSong(foundSong);
            }
        }
        getSong(id);

    }, [id]);

    if (!song) {
        return <div>Loading...</div>
    }

    const { text } = song;

    return (
        <div className='song-details-item'>
            {song && (
                <>
                    <div className='song-image'>
                        <img src={song.img} alt={song.title} />
                        <div className='song-title-artist'>
                            <h1>{song.artist}</h1>
                            <h2>{song.title}</h2>
                        </div>
                    </div>
                    <div className='lyrics-details'>
                        <div className='song-lyrics'>
                            <h2>Lyrics to {song.title}</h2>
                            {text && (
                                <div className='lyrics-text'>
                                    <p>{text.verse1}</p>
                                    <p>{text.verse2}</p>
                                    <p>{text.verse3}</p>
                                    <p>{text.verse4}</p>
                                    <p>{text.verse5}</p>
                                    <p>{text.verse6}</p>
                                    <p>{text.verse7}</p>
                                </div>
                            )}
                        </div>
                        <div className='song-details'>
                            <h3>Everything you need to know about {song.title}:</h3>
                            <img src={song.img} alt={song.title} />
                            <div className='details-list'>
                                <p>Title: {song.title}</p>
                                <p>Artist: {song.artist}</p>
                                <p>Album: {song.album}</p>
                                <p>Release date: {song.date}</p>
                                <p>Producers: {song.producer}</p>
                                <p>Genre: {song.genre}</p>
                                <p>Listen to {song.title} on YouTube:
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default SongDetails;