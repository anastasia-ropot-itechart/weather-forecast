import React, { useState, SyntheticEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addCity, getWeather, showAlert } from '../../redux/actions';
import { Alert } from '../Alert';

export const FindForm = (props: any) => {
    const dispatch = useDispatch();

    const [city, setCity] = useState('');
    const [coordinates, setCoordinates] = useState('');

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        setCity('');
        setCoordinates('');
    };

    const changeInputCityHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCity(event.target.value);
    };

    const changeInputCoordinatesHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCoordinates(event.target.value);
    };

    return (
        <>
            {props.alert && <Alert text={props.alert} />}
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
                        onChange={changeInputCityHandler}
                        placeholder="Minsk"
                    />
                </div>
                <button className="button" type="submit" onClick={() => dispatch(getWeather(`q=${city}`))}>
                    start
                </button>

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
                        onChange={changeInputCoordinatesHandler}
                        placeholder="lat,lon"
                    />
                </div>
                <button
                    className="button"
                    type="submit"
                    onClick={() =>
                        dispatch(getWeather(`lat=${coordinates.split(',')[0]}&lon=${coordinates.split(',')[1]}`))
                    }
                >
                    start
                </button>
            </form>
        </>
    );
};

const mapDispatchToProps = {
    addCity,
    showAlert,
};

const mapStateToProps = (state: any) => ({
    alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(FindForm);
