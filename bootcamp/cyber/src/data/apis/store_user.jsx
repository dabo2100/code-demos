import axios from "axios";
import { domain } from "../../store";
import { toast } from "react-toastify";
export const storeUser = async (values) => {
    let final;
    await axios.post(domain + '/api/auth/local/register', {
        username: values.username,
        email: values.email,
        password: values.password,
    }).then(async (info) => {
        await axios.put(domain + `/api/users/${info.data.user.id}`, { phone: values.phone }).then(() => {
            final = info.data
        }).catch(() => toast.error("Phone is Already Exist"))
    }).catch(() => {
        toast.error("Email or Username is Already Exist");
    })
    return final
}
