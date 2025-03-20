import axios from "axios";
import { domain } from "../../store";

export const indexCategories = async () => {
    let final = [];
    await axios.get(domain + '/api/categories').then((res) => { final = res.data.data })
    return final
}
