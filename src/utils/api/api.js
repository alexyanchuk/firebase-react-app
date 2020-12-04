import { isEmpty } from "underscore";
import queryString from "query-string";
import { apiUrl } from "../../services";

export const opts = {
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Request-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
    },
};

const qs = params =>
    !isEmpty(params) ? `?${queryString.stringify(params, { arrayFormat: "index" })}` : "";

const processResponse = async resp => {
    // Catch "too many requests" error
    if (resp.status === 429) {
        return new Error(resp.statusText);
    }
    if (resp.message) {
        return { message: resp.message };
    }
    try {
        const body = await resp.json();

        return resp.ok ? body : { ...body, status: resp.status };
    } catch (e) {
        if (e && e.message) {
            throw new Error(e.message);
        }
        throw new Error(`${resp.status}: ${resp.statusText}`);
    }
};

const buildHeaders = additionalHeaders => {
    const options = { ...opts };
    options.headers = {
        ...options.headers,
        // ...{
        //     Authorization: authUser?.access_token
        //         ? `Bearer ${authUser?.access_token}`
        //         : null,
        // },
        ...additionalHeaders,
    };

    return options;
};

const getOptions = async (url, additionalHeaders) => {
    return buildHeaders(additionalHeaders);
};

export const get = async (url, params = {}) => {
    const options = await getOptions(url, {});
    // Prevent Unauthorized requests
    if (!options) {
        return [];
    }
    const response = await fetch(`${apiUrl}${url}${qs(params)}`, {
        ...options,
        method: "GET",
    }).catch(e => {
        console.info(e);
    });

    return processResponse(response);
};

export const post = async (url, body = {}) => {
    const options = await getOptions(url, {});
    if (!options) {
        return [];
    }
    const response = await fetch(`${apiUrl}${url}`, {
        ...options,
        method: "POST",
        body: JSON.stringify(body),
    }).catch(e => {
        console.info(e);
    });

    return response;
};
