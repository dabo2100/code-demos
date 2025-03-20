import { create } from "zustand";

export const domain = 'http://localhost:1337';

export const useSideHeader = create((set) => ({
    index: false,
    openSideHeader: () => (set(() => ({ index: true }))),
    closeSideHeader: () => (set(() => ({ index: false })))
}))