import '../Navigation/styles/TitleNavigation.style.css'
import { Logo } from '../../assets'

const TitleNavigation = () => {
    return (
        <div className="title-navigation">
            <Logo />
            <h1>Tune<span>Hub</span></h1>
        </div>
    )
}

export default TitleNavigation;