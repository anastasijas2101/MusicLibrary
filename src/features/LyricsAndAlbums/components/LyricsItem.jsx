import './LyricsItem.style.css'
import Button from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import heart from '../../../assets/favorites.svg'
import { useFavoritesStore } from '../../../stores/favorites.store'

const LyricsItem = ({ song }) => {
    const navigate = useNavigate();
    const { addFavorites } = useFavoritesStore();

    const handleDetails = (id) => {
        navigate(`${id}`)
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
                    <img src={heart} alt='favorites' onClick={() => addFavorites(song)} />
                </div>
            </div>
        </div>
    )
}

export default LyricsItem;