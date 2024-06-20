import './Footer.style.css'
import { Youtube, Instagram, XIcon, Snapchat, Facebook } from '../../../../assets'

const Footer = () => {
    return (
        <footer className='footer-style'>
            <h3>For more fun content, follow us on:</h3>
            <div className='footer-image-div'>
                <a href='https://www.youtube.com/'>
                    <Youtube />
                </a>
                <span>|</span>
                <a href='https://www.instagram.com/'>
                    <Instagram />
                </a>
                <span>|</span>
                <a href='https://x.com/?lang=en'>
                    <XIcon />
                </a>
                <span>|</span>
                <a href='https://www.snapchat.com/'>
                    <Snapchat />
                </a>
                <span>|</span>
                <a href='https://www.facebook.com/'>
                    <Facebook />
                </a>
            </div>
        </footer>
    )
}

export default Footer;