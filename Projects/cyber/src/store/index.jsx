import { atom } from "recoil";

export const $All_Products = atom({
    key: "$All_Products",
    default: [
        { productName: "Product 1", price: 200, cat_id: 1 },
        { productName: "Product 2", price: 200, cat_id: 1 },
        { productName: "Product 3", price: 200, cat_id: 1 },
        { productName: "Product 4", price: 200, cat_id: 2 },
        { productName: "Product 5", price: 200, cat_id: 2 },
        { productName: "Product 6", price: 200, cat_id: 2 },
        { productName: "Product 7", price: 200, cat_id: 3 },
        { productName: "Product 8", price: 200, cat_id: 3 },
        { productName: "Product 9", price: 200, cat_id: 3 },
        { productName: "Product 10", price: 200, cat_id: 4 },
        { productName: "Product 11", price: 200, cat_id: 5 },
        { productName: "Product 12", price: 200, cat_id: 6 },
        { productName: "Product 13", price: 200, cat_id: 7 },
        { productName: "Product 14", price: 200, cat_id: 8 },
    ],
})

export const $Filtered_Products = atom({
    key: "$Filtered_Products",
    default: []
})

export const $Pagenated_Products = atom({
    key: "$Pagenated_Products",
    default: {
        productsPerView: 6,
        indexPage: 0,
        view: []
    }

})

// 15 product [1 2 3 4 5 6 7 8 9 10] [11 12 13 14 15]
// 10 productPerView
// pages 3
// pageIndex  0 , 1

// start = (pageIndex * productsPerPage) + 1 ==> 1  6   11
// end   = start + productsPerPage - 1       ==> 5  10  15