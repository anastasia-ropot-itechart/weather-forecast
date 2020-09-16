import React from 'react';
import FindForm from './components/Weather/FindForm';
import { FetchedWeather } from './components/Weather/FetchedWeather';
import { Header } from './components/Header/Header';

export const App = () => {
    return (
        <>
            <Header />
            <main className="wrapper">
                <FindForm />
                <FetchedWeather />
            </main>
        </>
    );
};
