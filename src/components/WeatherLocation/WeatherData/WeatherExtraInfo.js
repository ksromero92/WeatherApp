import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont">
        <span className="extraInfoTesxt">{`Humedad: ${humidity}  % `}</span>
        <span className="extraInfoTesxt">{`Vientos: ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;