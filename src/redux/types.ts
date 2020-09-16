export const FETCH_WEATHER = 'WEATHER/FETCH_WEATHER';
export const ADD_MEASUREMENT = 'WEATHER/ADD_MEASUREMENT';
export const SHOW_LOADER = 'APP/SHOW_LOADER';
export const HIDE_LOADER = 'APP/HIDE_LOADER';
export const SHOW_ALERT = 'APP/SHOW_ALERT';
export const HIDE_ALERT = 'APP/HIDE_ALERT';

// State
export interface App {
    loading: boolean;
    alert: null | string;
}

export interface Weather {
    measurement: string;
    fetchedWeather: any;
}

// Actions
interface AddMeasurement {
    type: typeof ADD_MEASUREMENT;
    payload: string;
}

interface FetchWeather {
    type: typeof FETCH_WEATHER;
    payload: any;
}

export type WeatherActions = AddMeasurement | FetchWeather;

interface ShowLoader {
    type: typeof SHOW_LOADER;
}

interface HideLoader {
    type: typeof HIDE_LOADER;
}

interface ShowAlert {
    type: typeof SHOW_ALERT;
    payload: string;
}

interface HideAlert {
    type: typeof HIDE_ALERT;
}

export type AppActions = ShowAlert | ShowLoader | HideAlert | HideLoader;
