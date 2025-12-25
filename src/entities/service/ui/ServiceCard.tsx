import { useCart } from "@/app/store"
import type { Service } from "@/shared/api"
import type { FC } from "react"
import styles from "./ServiceCard.module.css"

const ServiceCard: FC<Service> = (service) => {
  const { add, checkById } = useCart()
  const isInCart = checkById(service.id)

  const onClick = () => add(service)

  return (
    <article className={styles.card}>
      <h2>{service.name}</h2>
      <p className={styles.price}>{service.price}р</p>
      <button
        disabled={isInCart}
        onClick={onClick}
        className={styles.addbutton}
      >
        {isInCart ? "Добавлено" : "Добавить"}
      </button>
    </article>
  )
}

export default ServiceCard
