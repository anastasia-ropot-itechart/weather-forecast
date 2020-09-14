import { ADD_CITY, FETCH_WEATHER } from './types';

const initialState = {
    city: '',
    fetchedWeather: [],
};

export const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CITY:
            return { ...state, city: action.payload };
        case FETCH_WEATHER:
            return { ...state, fetchedWeather: action.payload };
        default:
            return state;
    }
};
