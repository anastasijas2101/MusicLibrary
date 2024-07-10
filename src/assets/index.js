import logoIcon from './logo-image.png'
import youtube from './youtube-icon.webp'
import instagram from './instagram.png'
import xIcon from './x-icon.png'
import snapchat from './snapchat.png'
import facebook from './facebook.webp'
import soundWaves from './sound-waves.png'
import notes from './music-notes.png'
import dancing from './dancing.png'
import enjoy from './enjoy.png'

const Logo = () => {
    return <img src={logoIcon} alt='TuneHub' />
}

const SoundWaves = ({ className }) => {
    return <img src={soundWaves} className={className} alt='Sound-Waves' />
}

const Notes = ({ className }) => {
    return <img src={notes} className={className} alt='Music-notes' />
}

const Dancing = ({ className }) => {
    return <img src={dancing} className={className} alt='Dancing' />
}

const Enjoy = () => {
    return <img src={enjoy} alt='enjoy' />
}

const Youtube = () => {
    return <img src={youtube} alt='YouTube' />
}

const Instagram = () => {
    return <img src={instagram} alt='Instagram' />
}

const XIcon = () => {
    return <img src={xIcon} alt='X' />
}

const Snapchat = () => {
    return <img src={snapchat} alt='Snapchat' />
}

const Facebook = () => {
    return <img src={facebook} alt='Facebook' />
}

export {
    Logo,
    SoundWaves,
    Notes,
    Dancing,
    Enjoy,
    Youtube,
    Instagram,
    XIcon,
    Snapchat,
    Facebook,
}