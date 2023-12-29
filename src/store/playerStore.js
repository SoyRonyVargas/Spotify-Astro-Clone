import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  volume: 1,
  currentMusic: {
    playlist: null,
    song: null,
    songs: []
  },
  setIsPlaying: (value) => set((state) => ({ isPlaying: value })),
  setVolume: (value) => set(() => ({ volume: value })),
  setCurrentMusic: (currentMusic) => set(() => ({ currentMusic }))
//   removeAllBears: () => set({ bears: 0 }),
}))