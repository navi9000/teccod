import { useCart } from "@/app/store"
import type { FC, RefObject } from "react"
import styles from "./Total.module.css"
import type { Resolve } from "@/shared/api/models"
import clsx from "clsx"

type Props = {
  ref: RefObject<HTMLDivElement | null>
  className?: string
}

const Total: FC<Resolve<Props>> = ({ ref, className }) => {
  const { services, clear } = useCart()

  const sum = services.reduce((prev, curr) => prev + curr.price, 0)
  return (
    <div ref={ref} className={clsx(styles.total, className)}>
      {sum > 0 && (
        <ul className={styles.list}>
          {services.map((service) => (
            <li key={service.id} className={styles.item}>
              {service.name}
            </li>
          ))}
        </ul>
      )}
      <div>Сумма: {sum}р</div>
      <button onClick={clear} disabled={sum === 0}>
        Оформить заказ
      </button>
    </div>
  )
}

export default Total
