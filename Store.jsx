import { create } from 'zustand'

export const useStore = create((set) => ({
    user: null,
    CARD: [],
    CONECT: false,
    connection: () =>set(() => ({CONECT: true})),
    deconnection: () =>set(() => ({CONECT: false})),
    updateCARD: (produit) => set((state) => ({ CARD: [...state.CARD,{...produit,qte:1}] })),
    updateProduit: (produit) => set(() => ({ CARD: produit })),
    resetCARD: () => set(() => ({ CARD: [] })),
}))