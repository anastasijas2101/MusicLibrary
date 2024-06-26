import '../style/LatestNews.style.css'
import { news } from '../../../data/news'
import LatestNewsItem from './LatestNewsItem';

const LatestNews = () => {
    return (
        <div className='news-title'>
            <h1>Latest Music News</h1>
            <hr />
            <div className='latest-news-page'>
                {news.map((info) => (
                    <LatestNewsItem info={info} />
                ))}
            </div>
        </div>
    )
}

export default LatestNews;