export interface Service {
  id: number
  name: string
  price: number
}

export type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] }
