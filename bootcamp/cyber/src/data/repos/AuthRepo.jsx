import { tokenCheck } from "../apis/check_token";
import { userLogin } from "../apis/login_user";
import { storeUser } from "../apis/store_user"

export const AuthRepo = {
    register: async (values) => {
        return storeUser(values);
    },

    checkToken: async (token) => {
        return tokenCheck(token);
    },

    login: async (values) => {
        return userLogin(values);
    },

}