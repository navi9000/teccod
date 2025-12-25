import type { Service } from "@/shared/api"

export const servicesLoader = () => {
  // захардкоженный список услуг
  const serviceList: Service[] = [
    {
      id: 1,
      name: "Ответить на звонок",
      price: 200,
    },
    {
      id: 2,
      name: "Погладить кота",
      price: 400,
    },
    {
      id: 3,
      name: "Доставить посылку",
      price: 300,
    },
  ]

  return {
    serviceList,
  }
}

export type ServicesLoader = typeof servicesLoader
