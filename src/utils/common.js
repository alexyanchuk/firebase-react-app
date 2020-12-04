export const storeAuthentication = jwt_token => {
    return localStorage.setItem("user", JSON.stringify(jwt_token));
};

export const getAuthentication = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const setLocalStorage = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
};

export const removeFromLocalStorage = key => {
    return localStorage.removeItem(key);
};

export const findOfMany = (array, key) => {
    return array?.find(product => product.id === key);
};
