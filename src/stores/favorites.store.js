import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
    favorites: [],
    addFavorites: (addSong) => set((state) => ({ favorites: [...state.favorites, addSong] })),
    clearFavorites: () => set({ favorites: [] }),
    deleteFavorites: (id) => set((state) => ({ favorites: state.favorites.filter((song) => song.id !== id) })),
}))