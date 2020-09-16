import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, showAlert } from '../../redux/actions';
import { App } from '../../redux/types';
import { Alert } from '../Alert';

export interface DefaultRootState {
    app: App;
}

export const FindForm: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [coordinates, setCoordinates] = useState<string>('');
    const dispatch = useDispatch();
    const alert = useSelector((state: DefaultRootState) => state.app.alert);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!city.trim() && !coordinates.trim()) {
            return dispatch(showAlert('value mast not be empty'));
        }
        setCity('');
        setCoordinates('');
    };

    return (
        <>
            {alert && <Alert text={alert} />}
            <h2>Weather Forecast</h2>
            <h3>Current weather: </h3>
            <form onSubmit={submitHandler} className="find-form">
                <div className="find-form__group">
                    <label className="find-form__label" htmlFor="city">
                        1) By city name
                    </label>
                    <input
                        type="text"
                        className="find-form__input"
                        id="city"
                        value={city}
                        name="city"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)}
                        placeholder="Minsk"
                    />
                    <button className="button" type="submit" onClick={() => dispatch(getWeather(`q=${city}`))}>
                        start
                    </button>
                </div>

                <div className="find-form__group">
                    <label className="find-form__label" htmlFor="coordinates">
                        2) By geographic coordinates
                    </label>
                    <input
                        type="text"
                        className="find-form__input"
                        id="coordinates"
                        value={coordinates}
                        name="coordinates"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCoordinates(event.target.value)}
                        placeholder="lat,lon"
                    />
                    <button
                        className="button"
                        type="submit"
                        onClick={() =>
                            dispatch(getWeather(`lat=${coordinates.split(',')[0]}&lon=${coordinates.split(',')[1]}`))
                        }
                    >
                        start
                    </button>
                </div>
            </form>
        </>
    );
};

export default FindForm;
