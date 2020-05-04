import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onClickWL, city, data }) => (
    <div className="weatherLocationCont" onClick={onClickWL}>
        <Location city={city}></Location>
        {data ?
            <WeatherData data={data}></WeatherData> :
            <CircularProgress size={50} />
        }
    </div>
)

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onClickWL: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}


export default WeatherLocation;