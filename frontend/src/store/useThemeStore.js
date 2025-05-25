import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("streamer-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("streamer-theme", theme);
    set({ theme });
  },
}));
