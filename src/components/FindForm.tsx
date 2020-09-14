import React, { useState, SyntheticEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addCity, getWeather, showAlert } from '../redux/actions';
import { Alert } from './Alert';

export const FindForm = (props: any) => {
    const dispatch = useDispatch();

    const [data, setData] = useState('');

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!data.trim()) {
            return props.showAlert('Input value must not be empty.');
        }
        props.addCity(data);
        setData('');
    };

    const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        setData(event.target.value);
    };

    return (
        <>
            {props.alert && <Alert text={props.alert} />}
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="city">By city name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={data}
                        name="city"
                        onChange={changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit" onClick={() => dispatch(getWeather(`q=${data}`))}>
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
