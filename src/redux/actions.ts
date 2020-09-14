import { ADD_CITY, FETCH_WEATHER, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from './types';

export function addCity(post: any) {
    return {
        type: ADD_CITY,
        payload: post,
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}

export function showAlert(text: any) {
    return (dispatch: any) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text,
        });

        setTimeout(() => {
            dispatch(hideAlert());
        }, 3000);
    };
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    };
}

export function getWeather(data: string) {
    return async (dispatch: any) => {
        try {
            dispatch(showLoader());
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?${data}&appid=dce29b7c45064caf5e8bc28bc3d23bcc`,
            );
            const json = await response.json();
            dispatch({ type: FETCH_WEATHER, payload: json });
            dispatch(hideLoader());
        } catch (e) {
            dispatch(showAlert(e.message));
            dispatch(hideLoader());
        }
    };
}