import '../style/SecondSlide.style.css'

const SecondSlideItem = ({ image, text }) => {
    return (
        <div className="slide-item">
            <img src={image} alt="info-image" />
            <p>{text}</p>
        </div>
    )
}

export default SecondSlideItem;