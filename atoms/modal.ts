import { atom } from "recoil";

export const modal = atom({
  key: "modalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const mounted = atom({
  key: "mounted",
  default: false,
});
