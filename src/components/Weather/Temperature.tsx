import React from 'react';
import { useSelector } from 'react-redux';

interface RootState {
    weather: any;
}

export const Temperature = ({ temp }: any) => {
    const measurement = useSelector((state: RootState) => state.weather.measurement);

    if (measurement === 'Celsius') {
        return <span> {Math.round(temp - 273.15)} c</span>;
    }

    if (measurement === 'Fahrenheit') {
        return <span> {Math.round((temp * 9) / 5 - 459.67)} f</span>;
    }

    return <span> {Math.round(temp)} k</span>;
};
