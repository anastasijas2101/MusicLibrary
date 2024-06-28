import '../style/Charts.style.css'
import { useChartsStore } from '../../../stores/charts.store';
import ChartsItem from './ChartsItem';
import Button from '../../../components/Button/Button'

const Charts = () => {
    const { charts, visibleChart, loadMoreCharts } = useChartsStore();

    return (
        <div className='charts'>
            <h1>Charts</h1>
            <hr />
            <div>
                <ul className='charts-list'>
                    {charts.slice(0, visibleChart).map((chart) => (
                        <li key={chart.id}>
                            <ChartsItem chart={chart} />
                        </li>
                    ))}
                </ul>
                {visibleChart < charts.length && (
                    <Button buttonText='Load more' onClick={loadMoreCharts} className='load-more-button' />
                )}
            </div>
        </div>
    )
}

export default Charts;