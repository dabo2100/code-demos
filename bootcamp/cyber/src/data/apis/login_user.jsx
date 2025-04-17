import axios from "axios";
import { domain } from "../../store";
export const userLogin = async (values) => {
    let userInfo;
    await axios.post(`${domain}/api/auth/local`, {
        identifier: values.email,
        password: values.password
    }).then((res) => {
        userInfo = res.data;
    }).catch((err) => { console.log(err) })
    return userInfo;
};