import '../style/ThirdSlide.style.css'
import Button from '../../../components/Button/Button'
import soundWaves from '../../../assets/sound-waves.png'
import notes from '../../../assets/music-notes.png'
import dancing from '../../../assets/dancing.png'
import Footer from './Footer/Footer'

const ThirdSlide = () => {
    return (
        <div className='full-third-slide'>
            <div className='third-slide'>
                <div className='image-div'>
                    <img src={notes} alt='music-notes' className='notes-dancing' />
                    <img src={soundWaves} alt='sound-waves' className='sound-waves' />
                    <img src={dancing} alt='dancing' className='notes-dancing' />
                </div>
                <p>Join us today and never miss any news from music world. Also, let us help you keep all of your favorite songs in one place.</p>
                <Button buttonText='Subscribe to TuneHub' className='button-join' />
            </div>
            <Footer />
        </div>
    )
}

export default ThirdSlide;