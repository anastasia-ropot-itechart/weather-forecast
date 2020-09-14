import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    weather: weatherReducer,
    app: appReducer,
});
