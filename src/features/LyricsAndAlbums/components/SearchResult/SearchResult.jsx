import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './SearchResult.style.css'

const SearchResult = ({ results }) => {
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`${id}`)
    }

    return (
        <div className='search-result'>
            {results.map((result) => (
                <>
                    <div className='search-details' key={result.id}>
                        <img src={result.img} alt={result.title} />
                        <div className='song-title'>
                            <h2>{result.artist} - {result.title}</h2>
                            <hr />
                            <Button buttonText='See Lyrics' className='lyrics-button' onClick={() => handleDetails(result.id)} />
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default SearchResult;