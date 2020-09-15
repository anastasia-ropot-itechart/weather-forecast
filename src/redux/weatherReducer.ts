import { ADD_CITY, ADD_MEASUREMENT, FETCH_WEATHER } from './types';

const initialState = {
    city: '',
    measurement: 'Kelvin',
    fetchedWeather: [],
};

export const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CITY:
            return { ...state, city: action.payload };
        case ADD_MEASUREMENT:
            return { ...state, measurement: action.payload };
        case FETCH_WEATHER:
            return { ...state, fetchedWeather: action.payload };
        default:
            return state;
    }
};
