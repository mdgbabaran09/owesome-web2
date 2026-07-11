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
import { URL_LOGIN, URL_SIGNUP } from '@/lib/constants'


function Navbar() {
  const location = useLocation()
  const isHideNavbarBtns = location.pathname === URL_LOGIN || location.pathname === URL_SIGNUP;
  // console.log("url:", location.pathname === URL_LOGIN);

  return (
    <>
      {/* use sticky so that flex is applicable to it. follows document flow. dont use fixed */}
      <nav className="w-full sticky top-0 z-50 bg-background" >
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
          <div className={`${isHideNavbarBtns ? "hidden" : "flex"} gap-2 shrink-0 ml-auto mr-3 md:ml-0 md:mr-0`}>
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
              <div className="m-4">
                <ul className="flex justify-start gap-4 flex-2 flex-col text-lg">
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