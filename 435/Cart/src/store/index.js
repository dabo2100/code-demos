import { atom } from "recoil";

export const $Cart = atom({
  key: "$Cart",
  default: [],
});

export const $baseUrl = atom({
  key: "$baseURl",
  default: "http://localhost:1337",
});
