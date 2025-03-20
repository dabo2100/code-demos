import { indexCategories } from "../apis/index_categories";
import { indexProducts } from "../apis/index_products";

export const ShopRepo = {
    categories_index: async () => {
        return await indexCategories();
    },

    products_index: async (pageNo, pageSize, filtersIds) => {
        return await indexProducts(pageNo, pageSize, filtersIds);
    },
}
