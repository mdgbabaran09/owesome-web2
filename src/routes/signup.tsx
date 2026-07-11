import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { Separator } from '@/components/ui/separator'
import { EMAIL_PLACEHOLDER } from '@/lib/constants'
// import { useMutation } from '@tanstack/react-query'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  // const mutation = useMutation({
  //   mutationFn: signUp,
  // });

  // async function signUp(userData: any) {
  //   const res = await fetch(`${API_BASE_URL}/auth/signup`, {
  //     method: 'POST',
  //     body: userData,
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }
  //   })

  //   return res.json();
  // }

  // function handleSubmit(event: any) {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   formData.append("currency", "USD");
  //   const data = Object.fromEntries(formData.entries());
  //   const json = JSON.stringify(data);

  //   console.log(json);
  //   mutation.mutate(json);
  // }

  const countries = ["United States", "Canada", "Mexico"]
  return (
    <div className='flex justify-center items-center flex-col'>
      {/* Login */}
      <Card className="w-full min-w-xs sm:min-w-sm">
        <CardHeader>
          <Button variant="link" className='justify-start px-0' asChild>
            <Link to="/" className='mb-2'>{"< Home"}</Link>
          </Button>
          <CardTitle>Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="signup">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={EMAIL_PLACEHOLDER}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  required
                />
              </div> */}
              {/* <div className="grid gap-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="text"
                  name="phone"
                  required
                />
              </div> */}
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Combobox items={countries} defaultValue={countries[0]}>
                  <ComboboxInput id="country"
                    type="text"
                    name="country" placeholder="Select a country" />
                  <ComboboxContent>
                    <ComboboxEmpty>No countries found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" form="signup" disabled={false}>
            Create account
          </Button>
          {/* <Separator className='my-2' /> */}
          {/* <Button variant="outline" className="w-full">
            Create an account with Google
          </Button> */}
          <Button variant="link" className='mt-3' asChild>
            <Link to="/login">Already have an account? Log in here</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}