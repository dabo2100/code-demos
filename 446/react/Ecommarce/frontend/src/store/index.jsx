import { create } from "zustand";

export const domain = create(() => ({
  value: "http://localhost:1337",
}));
