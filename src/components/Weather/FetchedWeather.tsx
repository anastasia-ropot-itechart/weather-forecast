import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { WeatherContent } from './WeatherContent';

interface RootState {
    weather: any;
    app: any;
}

export const FetchedWeather = () => {
    const weather = useSelector((state: RootState) => state.weather.fetchedWeather);
    const loading = useSelector((state: RootState) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {weather.main ? (
                <WeatherContent weather={weather} />
            ) : (
                <div className="not-data-block">Nothing to geocode</div>
            )}
        </>
    );
};
