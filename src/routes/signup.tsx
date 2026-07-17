import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'
import { signUp, type SignUpOutput } from '@aws-amplify/auth';
import { useState } from 'react'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

const countries = ["United States", "Canada", "Mexico"] as const

/* src: https://www.staticforms.dev/blog/react-js-form-validation */
const schema = z.object({
  name: z.string({ message: "Name is required" }).min(2, 'Name must be at least 2 characters'),
  email: z.email('Must be a valid email').toLowerCase(),
  password: z.string({ message: "Password is required" }).min(8, 'Password must be at least 8 characters')
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one capital letter",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => /[\^\$\.\*\[\]\{\}\(\)\?\-"!@#%&\/\\,><':;\|_~]/.test(val), {
      message: "Password must contain at least one symbol",
    }),
  country: z.enum(countries, {
    message: "Country is required",
  }),
});

type FormValues = z.infer<typeof schema>;

function RouteComponent() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async ({ name, email, password }: FormValues) => {
    try {
      const { isSignUpComplete, nextStep }: SignUpOutput = await signUp({
        username: email, // Gen 2 uses email as the username by default
        password: password,
        options: {
          userAttributes: {
            name
          }
        }
      });
      // console.log({ name, email, password });
      // If Cognito requires confirmation, advance to the verification step
      if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        console.log("CONFIRM_SIGN_UP step required. Redirecting to verification page...");
      } else if (isSignUpComplete) {
        console.log("SIGN UP complete. Redirecting to login page...");
      }
    } catch (error: any) {
      if (error.name === 'UsernameExistsException') {
        setErrorMessage("Email already exists. Please log in instead.");
      } else {
        setErrorMessage("An error occurred while signing up. Please try again later.");
        console.error("Error signing up:", error);
      }
    }
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      {/* Login */}
      <Card className="w-full min-w-xs max-w-xs md:min-w-md md:max-w-md">
        <CardHeader>
          <Button variant="link" className='justify-start px-0' asChild>
            <Link to="/" className='mb-2'>{"< Home"}</Link>
          </Button>
          <CardTitle>Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="signup" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col md:gap-6 gap-4">
              {errorMessage && (
                <p className="text-sm text-destructive">{errorMessage}</p>
              )}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., John Doe"
                  {...register('name')}
                  aria-invalid={Boolean(errors.name)}
                  autoFocus
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder='e.g., john.doe@example.com'
                  {...register('email')}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder='Enter password'
                  {...register('password')}
                  aria-invalid={Boolean(errors.password)}
                />
                {errors.password && (
                  <p className="text-sm text-destructive text-wrap">{errors.password.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Combobox items={countries} defaultValue={countries[0]}>
                  <ComboboxInput id="country" placeholder="Select a country"
                    {...register('country')}
                    aria-invalid={Boolean(errors.country)} />
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
                {errors.country && (
                  <p className="text-sm text-destructive">{errors.country.message}</p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" form="signup" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </Button>
          {/* <Separator className='my-2' /> */}
          {/* <Button variant="outline" className="w-full">
            Create an account with Google
          </Button> */}
          <Button variant="link" asChild>
            <Link to="/login">Already have an account? Log in here</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}