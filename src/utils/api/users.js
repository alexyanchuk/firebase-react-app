import { post, get } from "./api";

export const getUser = id => {
    return get("/users", id);
};
export const createNewUser = values => {
    return post("/users/create", values);
};
