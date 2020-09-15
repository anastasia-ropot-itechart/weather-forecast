import React from 'react';
import { Temperature } from './Temperature';

export const WeatherContent = ({ weather }: any) => {
    return (
        <ul className="weather">
            <li className="weather__item">
                <span className="weather__title">Place:</span> {weather.name}
            </li>
            <li className="weather__item">
                <span className="weather__title">Temperature:</span>
                <Temperature temp={weather.main.temp} />
            </li>
            <li className="weather__item">
                <span className="weather__title">Humidity:</span> {weather.main.humidity} %
            </li>
            <li className="weather__item">
                <span className="weather__title">Atmospheric pressure:</span> {weather.main.pressure} hPa
            </li>
            <li className="weather__item">
                <span className="weather__title">Wind speed:</span> {weather.wind.speed} meter/sec
            </li>
        </ul>
    );
};
