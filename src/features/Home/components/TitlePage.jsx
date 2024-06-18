import '../style/TitlePage.style.css'
import logoImage from '../../../assets/logo-image.png'

const TitlePage = () => {
    return (
        <div className='title-page'>
            <div className='left-title-page'>
                <h1>Explore the World Of Music</h1>
                <hr />
                <p>Come with us on a journey through pop, rock and
                    everything in between. Discover all that is hidden between the lines...</p>
            </div>
            <div className='right-title-page'>
                <img src={logoImage} alt='logoImage' />
                <h1>Tune<span>Hub</span></h1>
            </div>
        </div>
    )
}

export default TitlePage;