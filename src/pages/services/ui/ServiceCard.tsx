import { useCart } from "@/app/store"
import type { Service } from "@/shared/api"
import type { FC } from "react"

const ServiceCard: FC<Service> = (service) => {
  const { add, checkById } = useCart()
  const isInCart = checkById(service.id)

  const onClick = () => add(service)

  return (
    <article>
      <h2>{service.name}</h2>
      <div>{service.price}р</div>
      <button disabled={isInCart} onClick={onClick}>
        {isInCart ? "Добавлено" : "Добавить"}
      </button>
    </article>
  )
}

export default ServiceCard
