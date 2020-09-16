import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { WeatherContent } from './WeatherContent';
import { App, Weather } from '../../redux/types';

interface RootState {
    weather: Weather;
    app: App;
}

export const FetchedWeather: React.FC = () => {
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
