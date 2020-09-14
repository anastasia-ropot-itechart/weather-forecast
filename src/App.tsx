import React from 'react';
import FindForm from './components/FindForm';
import { FetchedWeather } from './components/FetchedWeather';

export const App = () => {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <FindForm />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h2>Weather Forecast</h2>
                    <FetchedWeather />
                </div>
            </div>
        </div>
    );
};
