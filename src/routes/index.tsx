import LandingPage from '@/components/LandingPage'
import Navbar from '@/components/Navbar'
import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const landingPageContactUsRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Navbar landingPageContactUsRef={landingPageContactUsRef} />
      <LandingPage landingPageContactUsRef={landingPageContactUsRef} />
    </>
  )
}