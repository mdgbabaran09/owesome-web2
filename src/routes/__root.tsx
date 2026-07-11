import Navbar from '@/components/Navbar'
import NotFoundComponent from '@/components/NotFound'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    {/* min-h-svh - uses the minimum height to 100% of the small viewport height. very good for mobile screen */}
    <div className='flex flex-col min-h-svh'>
      <Navbar />
      {/* content will never exceed navbar above 
      pt-1 - navbar wont cover the content if height is shrinked to extreme*/}
      {/* <div className='flex-1 overflow-y-auto flex justify-center items-center shrink-0 py-1'> */}
      <div className='flex-1 overflow-y-auto flex justify-center items-center shrink-0 py-1'>
        <Outlet />
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundComponent })