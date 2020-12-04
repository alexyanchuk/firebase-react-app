import moment from "moment";

export const sleep = ms => {
    // eslint-disable-next-line no-undef
    return new Promise(resolve => {
        return setTimeout(resolve, ms);
    });
};

export const getDate = s => {
    return s && moment(Date.now()).add(s, "seconds").format();
};
