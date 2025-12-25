import type { FC } from "react"
import { useLoaderData } from "react-router"
import { type ServicesLoader } from "@/pages/services"
import { Container } from "@/shared/ui"
import styles from "./ServicesPage.module.css"
import { ServiceCard } from "@/entities/service"

const ServicesPage: FC = () => {
  const { serviceList } = useLoaderData<ServicesLoader>()
  return (
    <Container>
      <Container.Child className={styles.content}>
        {serviceList.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </Container.Child>
    </Container>
  )
}

export default ServicesPage
