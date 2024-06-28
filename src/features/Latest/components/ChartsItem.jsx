import '../style/Charts.style.css'

const ChartsItem = ({ chart }) => {
    return (
        <div className='chart'>
            <h4>{chart.id}</h4>
            <img src={chart.img} alt={chart.title} />
            <h3>{chart.title}</h3>
            <h3>{chart.artist}</h3>
            <p>{chart.date}</p>
        </div>
    )
}

export default ChartsItem;