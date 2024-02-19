import { create } from 'zustand'

export const useStore = create((set) => ({
    CARD: [],
    updateCARD: (produit) => set((state) => ({ CARD: [...state.CARD,{...produit,qte:1}] })),
    updateProduit: (produit) => set(() => ({ CARD: produit })),
    resetCARD: () => set(() => ({ CARD: [] })),
}))