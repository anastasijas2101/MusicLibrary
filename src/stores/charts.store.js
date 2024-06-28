import { create } from "zustand";
import { charts } from "../data/charts";

export const useChartsStore = create((set) => ({
    charts,
    visibleChart: 5,
    loadMoreCharts: () => { set((state) => ({ visibleChart: state.visibleChart + 5 })) },
}))