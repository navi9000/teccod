import type { FC } from "react"
import { Link, Outlet } from "react-router"
import styles from "./MainLayout.module.css"
import Container from "../Container/Container"
import { lazy, useRef, useState } from "react"
import { useClickOutside } from "@/shared/utils/viewport"

const Total = lazy(() => import("./components/Total"))

const MainLayout: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const totalRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useClickOutside(totalRef, () => setIsOpen(false), buttonRef)

  const toggleCart = () => setIsOpen((prev) => !prev)

  return (
    <div>
      <Container tag="header" className={styles.headercontainer}>
        <Container.Child className={styles.headercontent}>
          <Link to="/">ЛОГО</Link>
          <div className={styles.cartwrapper}>
            <button
              className={styles.opencartbutton}
              ref={buttonRef}
              onClick={toggleCart}
            >
              Итого
            </button>
            {isOpen && <Total ref={totalRef} className={styles.total} />}
          </div>
        </Container.Child>
      </Container>
      <Outlet />
    </div>
  )
}

export default MainLayout
