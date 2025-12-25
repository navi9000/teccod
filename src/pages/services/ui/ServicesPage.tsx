import type { FC } from "react"
import { useLoaderData } from "react-router"
import { type ServicesLoader } from "@/pages/services"
import ServiceCard from "./ServiceCard"

const ServicesPage: FC = () => {
  const { serviceList } = useLoaderData<ServicesLoader>()
  return (
    <div>
      {serviceList.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}

export default ServicesPage
