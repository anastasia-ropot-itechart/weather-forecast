import React, { SyntheticEvent, useState, useEffect } from 'react';
import { addMeasurement } from '../../redux/actions';
import { connect } from 'react-redux';
import { WeatherContent } from '../Weather/WeatherContent';
import { Loader } from '../Loader';

const Header = (props: any) => {
    const [measurement, setMeasurement] = useState('Kelvin');
    const [userWeather, getUserWeather] = useState(null);

    useEffect(() => {
        async function getUserCity() {
            try {
                const userData = await fetch('https://ipapi.co/json/').then((data) => data.json());
                const userCity = userData.city;
                const weather = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=dce29b7c45064caf5e8bc28bc3d23bcc`,
                ).then((data) => data.json());
                getUserWeather(weather);
            } catch (err) {
                console.log(err);
            }
        }

        getUserCity();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        setMeasurement(event.target.value);
    };

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        props.addMeasurement(measurement);
    };

    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <div className="header__logo">WF</div>
                <div className="header__content">
                    {userWeather ? <WeatherContent weather={userWeather} /> : <Loader />}
                </div>
                <form className="switch-form" onSubmit={submitHandler}>
                    <ul className="switch-form__wrapper">
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Kelvin"
                                    checked={measurement === 'Kelvin'}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    className="switch-form__input"
                                />
                                <span>Celsius</span>
                            </label>
                        </li>
                    </ul>

                    <button className="button" type="submit">
                        choice
                    </button>
                </form>
            </div>
        </header>
    );
};

const mapDispatchToProps = {
    addMeasurement,
};

export default connect(null, mapDispatchToProps)(Header);
