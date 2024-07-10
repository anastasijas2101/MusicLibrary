import './Favorites.style.css'
import { Enjoy } from '../../assets'
import { useFavoritesStore } from '../../stores/favorites.store'
import deleteIcon from '../../assets/delete.png'

const Favorites = () => {
    const { favorites, deleteFavorites, clearFavorites } = useFavoritesStore();

    return (
        <div className='favorites'>
            <div className='favorites-top-div'>
                <h1>This is a place where we keep all of your favorite tunes</h1>
                <Enjoy />
            </div>
            <div className='favorites-bottom-div'>
                {favorites.length ? (
                    <>
                        <h3>These are your favorite Tunes:</h3>
                        <div className='favorites-list'>
                            {favorites.map((favorite) => (
                                <div className='favorite-song' key={favorite.id}>
                                    <img src={favorite.img} />
                                    <p>{favorite.artist} - {favorite.title}</p>
                                    <img src={deleteIcon} alt='delete' className='close-icon' onClick={() => deleteFavorites(favorite.id)} />
                                </div>
                            ))}
                        </div>
                        <hr />
                        <span onClick={() => clearFavorites()}>Clear your Favorites</span>
                    </>
                ) : (<>
                    <p> You have no favorites!</p>
                </>)}
            </div>
        </div>
    )
}

export default Favorites;