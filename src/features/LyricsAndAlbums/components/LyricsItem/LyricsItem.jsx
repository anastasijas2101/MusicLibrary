import './LyricsItem.style.css'
import Button from '../../../../components/Button/Button'
import heart from '../../../../assets/favorites.svg'
import { useNavigate } from 'react-router-dom'
import { useFavoritesStore } from '../../../../stores/favorites.store'
import { useState } from 'react'

const LyricsItem = ({ song }) => {
    const navigate = useNavigate();
    const { addFavorites, deleteFavorites } = useFavoritesStore();
    const [filled, setFilled] = useState();

    const handleDetails = (id) => {
        navigate(`${id}`)
    }

    const handleFavorites = () => {
        setFilled(!filled);

        if (filled) {
            deleteFavorites(song.id);
        } else {
            addFavorites(song);
        }
    }

    return (
        <div className='song-item' key={song.id}>
            <img src={song.img} alt={song.title} />
            <div className='song-title'>
                <h2>{song.artist} - {song.title}</h2>
                <hr />
                <p>Release date: {song.date}</p>
                <div className='buttons'>
                    <Button buttonText='See Lyrics' className='lyrics-button' onClick={() => handleDetails(song.id)} />
                    <img src={heart} alt='favorites' onClick={() => handleFavorites()} className={filled ? 'heart-filled' : ''} />
                </div>
            </div>
        </div>
    )
}

export default LyricsItem;