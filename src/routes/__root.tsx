import Navbar from '@/components/Navbar'
import NotFoundComponent from '@/components/NotFound'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundComponent })