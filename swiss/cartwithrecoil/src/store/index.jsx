import { atom } from "recoil";

export const $Counter = atom({
    key: "$Counter",
    default: 1000
})

export const $Products = atom({
    key: "$Products",
    default: []
})

export const $Cart = atom({
    key: "$Cart",
    default: []
})