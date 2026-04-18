import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      {/* Login */}
      <Card className="w-full max-w-xs md:max-w-sm">
        <CardHeader>
          <Button variant="link" className='justify-start px-0' asChild>
            <Link to="/" className='mb-2'>{"< Home"}</Link>
          </Button>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" form="login">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <Button variant="link" className='mt-2' asChild>
            <Link to="/signup">No account yet? Sign up here</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}