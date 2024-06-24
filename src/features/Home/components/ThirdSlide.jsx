import '../style/ThirdSlide.style.css'
import Button from '../../../components/Button/Button'
import { SoundWaves, Notes, Dancing } from '../../../assets'
import Footer from './Footer/Footer'
import { useNavigate } from 'react-router-dom'

const ThirdSlide = () => {
    const router = useNavigate();

    const handleClick = () => {
        router('/registration');
    }

    return (
        <div className='full-third-slide'>
            <div className='third-slide'>
                <div className='image-div'>
                    <Notes className='notes-dancing' />
                    <SoundWaves className='sound-waves' />
                    <Dancing className='notes-dancing' />
                </div>
                <p>Join us today and never miss any news from music world. Also, let us help you keep all of your favorite songs in one place.</p>
                <Button buttonText='Subscribe to TuneHub' className='subscribe-button' onClick={handleClick} />
            </div>
            <Footer />
        </div>
    )
}

export default ThirdSlide;