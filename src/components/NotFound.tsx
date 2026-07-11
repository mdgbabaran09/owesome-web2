import { Link } from "@tanstack/react-router";

export default function NotFoundComponent() {
  return (
    <div className="min-h-full min-w-sm p-15 flex flex-col justify-center items-center gap-3">
      <div className="text-5xl">404</div>
      <div className="text-lg md:text-xl">Uh oh. That page doesn't exist.</div>
      <Link className="text-primary" to="/">Go back to homepage</Link>
      <img className="size-100 md:size-120" src="./not-found-dog.svg" />
    </div>
  )
}
