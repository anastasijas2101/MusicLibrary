import '../style/NewReleases.style.css'
import { newReleases } from '../../../data/newReleases';

const NewReleases = () => {
    return (
        <div className='new-releases'>
            <h1>New Releases</h1>
            <hr />
            <div className='release-container'>
                {newReleases.map((release) => (
                    <a href={release.link}>
                        <div className='release'>
                            <img src={release.img} alt='song-image' />
                            <p>{release.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default NewReleases;