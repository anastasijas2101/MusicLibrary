import '../Navigation/styles/TitleNavigation.style.css'
import logoIcon from '../../assets/logo-image.png'

const TitleNavigation = () => {
    return (
        <div className="title-navigation">
            <img src={logoIcon} alt='logoIcon' />
            <h1>Tune<span>Hub</span></h1>
        </div>
    )
}

export default TitleNavigation;