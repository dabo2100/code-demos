import axios from "axios";
import { domain } from "../../store";

export const indexProducts = async (pageNo, pageSize, filtersIds = []) => {
    let final = { total: 0, data: [] };

    await axios.get(domain + '/api/products', {
        params: {
            populate: "*",

            pagination: {
                page: pageNo,
                pageSize: pageSize
            },

            filters: {
                category: {
                    documentId: {
                        $in: filtersIds
                    }
                }

            },

            sort: ['name']
        }
    }).then((res) => {
        final = {
            total: res.data.meta.pagination.total,
            data: res.data.data
        }
    })

    return final
}
