import '../style/LatestNews.style.css'

const LatestNewsItem = ({ info }) => {
    return (
        <div className='latest-news'>
            <img src={info.image} />
            <h3>{info.title}</h3>
            <p>{info.text}</p>
            <div className='date-author'>
                <p>{info.date}</p>
                <p>{info.author}</p>
            </div>
        </div>
    )
}

export default LatestNewsItem;