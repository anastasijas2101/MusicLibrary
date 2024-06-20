import './Footer.style.css'
import youtube from '../../../../assets/youtube-icon.webp'
import instagram from '../../../../assets/instagram.png'
import xIcon from '../../../../assets/x-icon.png'
import snapchat from '../../../../assets/snapchat.png'
import facebook from '../../../../assets/facebook.webp'

const Footer = () => {
    return (
        <footer className='footer-style'>
            <h3>For more fun content, follow us on:</h3>
            <div className='footer-image-div'>
                <a href='https://www.youtube.com/'><img src={youtube} alt='YouTube' /></a>
                <span>|</span>
                <a href='https://www.instagram.com/'>
                    <img src={instagram} alt='Instagram' />
                </a>
                <span>|</span>
                <a href='https://x.com/?lang=en'>
                    <img src={xIcon} alt='X' />
                </a>
                <span>|</span>
                <a href='https://www.snapchat.com/'>
                    <img src={snapchat} alt='Snapchat' />
                </a>
                <span>|</span>
                <a href='https://www.facebook.com/'>
                    <img src={facebook} alt='Facebook' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;