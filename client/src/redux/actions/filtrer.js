import {
    FILTRED_FOR_PRICE_HIGH_TO_LOW,
    FILTRED_FOR_PRICE_LOW_TO_HIGH,
    FILTRED_FOR_RATING_HIGH_TO_LOW,
    FILTRED_FOR_RATING_LOW_TO_HIGH,
    FILTRED_FOR_CATEGORY,
    FILTER_STATE,
    FILTRED_BY_Z_A,
    FILTRED_BY_A_Z,
    USERS_FILTERED
} from "./constant";

export const userFiltered = (name,users) => {
    return {
        type : USERS_FILTERED,
        payload : {name,users}
    }
}
export const filtredForRatingLowToHigh = (products) => {
    return {
        type: FILTRED_FOR_RATING_LOW_TO_HIGH,
        payload: products.sort((a, b) => b.rating - a.rating),
    };
};

export const filtredForRatingHightoLow = (products) => {
    return {
        type: FILTRED_FOR_RATING_HIGH_TO_LOW,
        payload: products.sort((a, b) => a.rating - b.rating),
    };
};

export const filtredForPriceLowToHigh = (products) => {
    return {
        type: FILTRED_FOR_PRICE_LOW_TO_HIGH,
        payload: products.sort((a, b) => a.price - b.price),
    };
};

export const filtredForPriceHightoLow = (products) => {
    return {
        type: FILTRED_FOR_PRICE_HIGH_TO_LOW,
        payload: products.sort((a, b) => b.price - a.price),
    };
};

export const filtredByZtoA = (products) => {
    return {
        type: FILTRED_BY_Z_A,
        payload: products.sort((a, b) => {
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
        }),
    };
};

export const filtredByAtoZ = (products) => {
    return {
        type: FILTRED_BY_A_Z,
        payload: products.sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }),
    };
};

export const filtredForCategory = (category) => {
    return (dispatch) => {
        dispatch({ type: FILTRED_FOR_CATEGORY, payload: category });
    };
};

export const changeFilterState = (category) => {
    return (dispatch) => {
        dispatch({ type: FILTER_STATE, payload: category });
    };
};
