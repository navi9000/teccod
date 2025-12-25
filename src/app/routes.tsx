import { NotFoundPage } from "@/pages/not-found"
import { servicesLoader, ServicesPage } from "@/pages/services"
import { MainLayout } from "@/shared/ui"
import type { FC } from "react"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <ServicesPage />,
        loader: servicesLoader,
      },
      {
        path: "not-found",
        element: <NotFoundPage />,
      },
    ],
  },
])

const Routes: FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
