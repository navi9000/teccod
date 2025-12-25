import type { Service } from "@/shared/api"
import { create } from "zustand"

type CartStore = {
  services: Service[]
  add: (service: Service) => void
  clear: () => void
  checkById: (id: number) => boolean
}

export const useCart = create<CartStore>((set, get) => ({
  services: [],
  add: (service) =>
    set((state) => ({ services: [...state.services, service] })),
  clear: () => set(() => ({ services: [] })),
  checkById: (id) => get().services.some((service) => service.id === id),
}))
