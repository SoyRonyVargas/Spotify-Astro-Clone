import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: {
    playlist: null,
    song: null,
    songs: []
  },
  setIsPlaying: (value) => set((state) => ({ isPlaying: value })),
  setCurrentMusic: (currentMusic) => set(() => ({ currentMusic }))
//   removeAllBears: () => set({ bears: 0 }),
}))