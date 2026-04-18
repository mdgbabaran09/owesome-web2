import { Link } from "@tanstack/react-router"
import logo from "../assets/owesome-logo.svg"
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu } from '@hugeicons/core-free-icons';
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { VisuallyHidden } from "radix-ui";
import { useLocation } from '@tanstack/react-router'
import { URL_LOGIN } from '@/lib/constants'


function Navbar() {
  const location = useLocation()

  // console.log("url:", location.pathname === URL_LOGIN);

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-background" >
        <div className="max-w-6xl mx-auto min-h-16 px-4 flex items-center justify-between">
          {/* Logo Container
        shrink-0 so that it does not shrink less than the necessary width
      */}
          <Link to="/" className="flex gap-2 items-center shrink-0">
            <img className="h-12 w-auto" src={logo} />
            <h1 className="text-xl font-semibold text-amber-700 tracking-tighter">
              owe<span className="text-amber-600">some</span>
            </h1>
          </Link>

          {/* Links */}
          <div className="hidden md:inline">
            <ul className="flex gap-8 justify-center flex-2 flex-row">
              <li>
                {/* create each page for each link */}
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className={`${location.pathname === URL_LOGIN ? "hidden" : "flex"} gap-2 shrink-0 ml-auto mr-3 md:ml-0 md:mr-0`}>
            <Button variant={"ghost"} asChild>
              <Link to="/login">
                Login
              </Link>
            </Button>

            <Button asChild>
              <Link to="/signup">
                Signup
              </Link>
            </Button>
          </div>

          {/* Navigation for mobile */}
          {/* <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <HugeiconsIcon icon={Menu} />
            </SheetTrigger>
            <SheetContent>
              <VisuallyHidden.Root>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
              </VisuallyHidden.Root>
              <div className="mt-5 p-5">
                <ul className="flex justify-start gap-1 flex-2 text-2xl flex-col">
                  <li>
                    <SheetClose asChild>
                      <a href="#landing-page-contact-us" className="block">Pricing</a>
                    </SheetClose>
                  </li>
                  <li>
                    <a href="#" className="block">About</a>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <a href="#landing-page-contact-us" className="block" onClick={onClickContactUs}>Contact</a>
                    </SheetClose>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet> */}
          <Popover>
            <PopoverTrigger className="md:hidden" asChild>
              <HugeiconsIcon icon={Menu} />
            </PopoverTrigger>
            <PopoverContent>
              <VisuallyHidden.Root>
                <PopoverHeader>
                  <PopoverTitle>Navigation</PopoverTitle>
                  <PopoverDescription />
                </PopoverHeader>
              </VisuallyHidden.Root>
              <div className="m-5">
                <ul className="flex justify-start gap-2 flex-2 flex-col text-lg">
                  <li>
                    <a href="#" className="block">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="block">About</a>
                  </li>
                  <li>
                    <a href="#landing-page-contact-us" className="block">Contact</a>
                  </li>
                </ul>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </>
  )
}


export default Navbar