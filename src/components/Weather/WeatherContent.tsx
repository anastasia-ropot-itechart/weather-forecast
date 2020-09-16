import React from 'react';
import { Temperature } from './Temperature';

export interface WeatherProps {
    weather: {
        name: string;
        main: {
            temp: number;
            humidity: number;
            pressure: number;
        };
        wind: {
            speed: number;
        };
    };
}

export const WeatherContent = ({ weather }: WeatherProps | any) => {
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
