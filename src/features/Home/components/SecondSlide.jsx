import { useState } from 'react';
import '../style/SecondSlide.style.css'
import News from '../../../assets/news.webp'
import MusicNotes from '../../../assets/music-notes.png'
import Discover from '../../../assets/magnifying-glass.png'
import Listen from '../../../assets/listen.png'
import SecondSlideItem from './SecondSlideItem';

const SecondSlide = () => {

    const [info, setInfo] = useState([
        {
            img: News,
            text: 'Discover all the latest news from the music world. Read all about the latest music gossip.'
        },
        {
            img: MusicNotes,
            text: 'With us learn the lyrics to all of your favorite songs. You will never confuse any song lyrics again.'
        },
        {
            img: Discover,
            text: 'Find all information about your favorite songs and albums. We gonna help you get hooked on old and new hits.'
        },
        {
            img: Listen,
            text: 'You will discover your favorite jams, that you will keep on reapat 24/7 and we are going to help you keep them all in one place.'
        },
    ])

    return (
        <div className='second-slide'>
            <div className='second-slide-div'>
                {info.map((component) => (
                    <SecondSlideItem
                        image={component.img}
                        text={component.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default SecondSlide;