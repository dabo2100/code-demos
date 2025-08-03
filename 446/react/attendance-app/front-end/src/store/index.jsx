// State Golbal
import { create } from 'zustand';

export const domain = 'http://localhost:1337';

export const systemEmployes = create((set) => ({
  list: [
    { id: 1, name: 'ali', salary: 7000, title: 'Frontend Developer' },
    { id: 2, name: 'ahmed', salary: 4900, title: 'Backend Developer' },
    { id: 3, name: 'hassan', salary: 7500, title: 'Office Boy' },
  ],
  removeUser: (id) => {
    set((state) => {
      return { list: state.list.filter((el) => el.id != id) };
    });
  },
}));

export const counter = create(() => ({
  counter: 1,
}));
