import './LyricsItem.style.css'
import Button from '../../../components/Button/Button'

const LyricsItem = ({ song }) => {
    return (
        <div className='song-item'>
            <img src={song.img} alt={song.title} />
            <div className='song-title'>
                <h2>{song.artist} - {song.title}</h2>
                <hr />
                <p>Release date: {song.date}</p>
                <Button buttonText='See Lyrics' className='lyrics-button' />
            </div>
        </div>
    )
}

export default LyricsItem;