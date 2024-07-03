import '../Navigation/styles/TitleNavigation.style.css'
import { Logo } from '../../assets'
import { useNavigate } from 'react-router-dom'

const TitleNavigation = () => {
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate('/')
    }

    return (
        <div className="title-navigation" onClick={() => handleLogo()}>
            <Logo />
            <h1>Tune<span>Hub</span></h1>
        </div>

    )
}

export default TitleNavigation;