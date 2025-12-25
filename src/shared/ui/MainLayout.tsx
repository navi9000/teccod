import { useCart } from "@/app/store"
import type { FC } from "react"
import { Link, Outlet } from "react-router"

const MainLayout: FC = () => {
  const { services, clear } = useCart()

  const sum = services.reduce((prev, curr) => prev + curr.price, 0)

  return (
    <div>
      <header>
        <Link to="/">ЛОГО</Link>
        <div>
          <button>Итого</button>
          <div>
            <ul></ul>
            <div>Сумма: {sum}р</div>
            <button onClick={clear} disabled={sum === 0}>
              Оформить заказ
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default MainLayout
