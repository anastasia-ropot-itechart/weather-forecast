import React from 'react';
import FindForm from './components/Weather/FindForm';
import { Header } from './components/Header/Header';
import { SaveCities } from './components/SaveCities/SaveCities';
import { Panel } from './components/Panel/Panel';

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className="wrapper">
                <h2>Weather Forecast</h2>
                <Panel title="Current weather:">
                    <FindForm />
                </Panel>
                <Panel title="Save City:">
                    <SaveCities />
                </Panel>
            </main>
        </>
    );
};
