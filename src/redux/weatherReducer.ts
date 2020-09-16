import { Weather, ADD_MEASUREMENT, FETCH_WEATHER, WeatherActions } from './types';

const initialState = {
    measurement: 'Kelvin',
    fetchedWeather: {},
};

export const weatherReducer = (state: Weather = initialState, action: WeatherActions) => {
    switch (action.type) {
        case ADD_MEASUREMENT:
            return { ...state, measurement: action.payload };
        case FETCH_WEATHER:
            return { ...state, fetchedWeather: action.payload };
        default:
            return state;
    }
};
