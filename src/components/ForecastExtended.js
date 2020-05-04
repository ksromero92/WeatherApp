import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const rederForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>))
}

const renderProgress = () => {
    return <CircularProgress size={50} />;
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>pronostico extendido para {city}</h2>
        {forecastData ?
            rederForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended