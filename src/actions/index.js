export const CHANGE_CITY = 'CHANGE_CITY';

export function changeCity(value) {
    return {
        type: CHANGE_CITY,
        city: value
    }
}
