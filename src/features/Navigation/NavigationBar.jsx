import { Link } from 'react-router-dom'
import '../Navigation/styles/NavigationBar.style.css'

const NavigationBar = () => {
    return (
        <nav className='navigation-bar'>
            <Link to={{ pathname: '/' }}>Home</Link>
            <span>|</span>
            <Link to={{ pathname: '/latest' }}>Latest</Link>
            <span>|</span>
            <Link to={{ pathname: '/lyrics' }}>Lyrics</Link>
            <span>|</span>
            <Link to={{ pathname: '/registration' }}>Registration</Link>
        </nav>
    )
}

export default NavigationBar