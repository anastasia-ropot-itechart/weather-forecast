import React, { SyntheticEvent, useEffect, useState } from 'react';
import { addMeasurement, getWeather, showAlert } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherContent } from '../Weather/WeatherContent';
import { Loader } from '../Loader';
import { Alert } from '../Alert';
import { DefaultRootState } from '../Weather/FindForm';
import { App, Weather } from '../../redux/types';

interface RootState {
    weather: Weather;
    app: App;
}

export const Header: React.FC = () => {
    const [measurement, setMeasurement] = useState<string>('Kelvin');
    const dispatch = useDispatch();
    const alert = useSelector((state: DefaultRootState) => state.app.alert);
    const weather = useSelector((state: RootState) => state.weather.fetchedWeather);

    useEffect(() => {
        async function getUserCity() {
            try {
                const userData = await fetch('https://ipapi.co/json/').then((data) => data.json());
                const userCity: string = userData.city;
                dispatch(getWeather(`q=${userCity}`));
            } catch (err) {
                dispatch(showAlert('Failed to fetch the data'));
            }
        }

        getUserCity();
    }, [dispatch]);

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(addMeasurement(measurement));
    };

    return (
        <header className="header">
            <div className="wrapper">
                {alert && <Alert text={alert} />}
                <div className="header__wrapper">
                    <div className="header__logo">WF</div>
                    <div className="header__content">
                        {weather.main ? <WeatherContent weather={weather} /> : <Loader />}
                    </div>
                    <form className="switch-form" onSubmit={submitHandler}>
                        <ul className="switch-form__wrapper">
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="Kelvin"
                                        checked={measurement === 'Kelvin'}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setMeasurement(event.target.value)
                                        }
                                        className="switch-form__input"
                                    />
                                    <span>Kelvin</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="Fahrenheit"
                                        checked={measurement === 'Fahrenheit'}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setMeasurement(event.target.value)
                                        }
                                        className="switch-form__input"
                                    />
                                    <span>Fahrenheit</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="Celsius"
                                        checked={measurement === 'Celsius'}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setMeasurement(event.target.value)
                                        }
                                        className="switch-form__input"
                                    />
                                    <span>Celsius</span>
                                </label>
                            </li>
                        </ul>

                        <button className="button" type="submit">
                            choose
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};
