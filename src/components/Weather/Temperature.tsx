import React from 'react';
import { useSelector } from 'react-redux';
import { Weather } from '../../redux/types';

interface RootState {
    weather: Weather;
}

interface ITemperature {
    temp: number;
}

export const Temperature: React.FC<{ temp: number }> = ({ temp }: ITemperature) => {
    const measurement = useSelector((state: RootState) => state.weather.measurement);

    if (measurement === 'Celsius') {
        return <span> {Math.round(temp - 273.15)} c</span>;
    }

    if (measurement === 'Fahrenheit') {
        return <span> {Math.round((temp * 9) / 5 - 459.67)} f</span>;
    }

    return <span> {Math.round(temp)} k</span>;
};
