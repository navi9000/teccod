import type { FC } from "react"
import { Container } from "@/shared/ui"
import { Link } from "react-router"
import styles from "./NotFoundPage.module.css"

const NotFoundPage: FC = () => {
  return (
    <Container>
      <Container.Child className={styles.content}>
        Страница не найдена.{" "}
        <Link to="/" className={styles.link}>
          Вернуться на главную
        </Link>
      </Container.Child>
    </Container>
  )
}

export default NotFoundPage
