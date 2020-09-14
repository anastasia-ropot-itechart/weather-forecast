import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from './Loader';

interface RootState {
    weather: any;
    app: any;
}

export const FetchedWeather = () => {
    const weather = useSelector((state: RootState) => state.weather.fetchedWeather);
    const place = useSelector((state: RootState) => state.weather.city);
    const loading = useSelector((state: RootState) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {weather.main ? (
                <div>
                    <div>Place: {place}</div>
                    <div>Temperature: {weather.main.temp}</div>
                    <div>Humidity: {weather.main.humidity} %</div>
                    <div>Atmospheric pressure: {weather.main.pressure} hPa</div>
                    <div> Wind speed: {weather.wind.speed} meter/sec</div>
                </div>
            ) : (
                <div>Nothing to geocode</div>
            )}
        </>
    );
};
