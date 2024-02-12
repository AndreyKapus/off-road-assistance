import { create } from "zustand";

export const useMenu = create((set, get, ev) => ({
  mobMenuIsOpen: false,

  setMenu: () => {
    set({ mobMenuIsOpen: ev });
  },
}));
