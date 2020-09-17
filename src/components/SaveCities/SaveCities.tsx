import React, { useEffect, useState } from 'react';
import { getWeather } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const SaveCities: React.FC = () => {
    const [cities, setCities] = useState<string[]>([]);
    const [city, setCity] = useState<string>('');
    const dispatch = useDispatch();

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const deleteCity = (city: string) => {
        localStorage.removeItem(`city-${city}`);
        setCities(cities.filter((item) => item !== city));
    };

    const saveCity = () => {
        localStorage.setItem(`city-${city}`, city);
        setCities(cities.concat(city));
        setCity('');
    };

    useEffect(() => {
        const keys: string[] = Object.keys(localStorage).filter((item) => item.includes('city-'));
        const userCities: string[] = [];
        keys.forEach((key: string) => {
            const userCity: string | null = localStorage.getItem(key);
            if (userCity !== null) {
                userCities.push(userCity);
            }
        });
        setCities(userCities);
    }, []);

    return (
        <>
            <form onSubmit={submitHandler} className="find-form">
                <div className="find-form__group">
                    <label className="find-form__label" htmlFor="coordinates">
                        City
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
                    <button className="button" type="submit" onClick={saveCity}>
                        save
                    </button>
                </div>
            </form>
            <ul className="saved-cities">
                {cities && cities.length ? (
                    cities.map((city) => (
                        <li key={city} className="saved-cities__content">
                            <div className="saved-cities__title" onClick={() => dispatch(getWeather(`q=${city}`))}>
                                {city}
                            </div>
                            <button
                                className="button saved-cities__button"
                                name={city}
                                onClick={() => deleteCity(city)}
                            >
                                delete
                            </button>
                        </li>
                    ))
                ) : (
                    <li>Save city</li>
                )}
            </ul>
        </>
    );
};
