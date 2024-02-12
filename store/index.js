import { create } from "zustand";

export const useMenu = create((set) => ({
  mobMenuIsOpen: false,
}));
