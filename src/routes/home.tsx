import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-amber-800 min-h-screen min-w-6xl'>
      <h1>Hi Mark!</h1>
      <div className='max-w-6xl flex justify-center items-center'>
        <div className='flex flex-row gap-4'>
          <Card>
            <CardContent>
              <p>You owe</p>
              <p>$100</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>They owe</p>
              <p>$100</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}