import type { FC, ReactNode } from "react"
import clsx from "clsx"
import styles from "./Container.module.css"

interface Props {
  children?: ReactNode
  tag?: keyof HTMLElementTagNameMap
  className?: string
}

interface FCWithChild<T> extends FC<T> {
  Child: FC<T>
}

const ContainerChild: FC<Props> = ({
  tag: Wrapper = "div",
  className,
  children,
}) => {
  return <Wrapper className={clsx(styles.child, className)}>{children}</Wrapper>
}

const Container: FCWithChild<Props> = ({
  tag: Wrapper = "div",
  className,
  children,
}) => {
  return (
    <Wrapper className={clsx(styles.container, className)}>{children}</Wrapper>
  )
}

Container.Child = ContainerChild

export default Container
