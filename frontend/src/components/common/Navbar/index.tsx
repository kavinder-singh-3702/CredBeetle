"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const coupons = [
  {
    name: "Deal of the Day",
    description: "Grab limited-time deals before they expire!",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Free Coupons",
    description: "Access free coupons for amazing savings on your purchases.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Premium Coupons",
    description: "Enjoy exclusive discounts with our premium coupons.",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Seasonal Offers",
    description:
      "Save big with special discounts available during seasonal sales.",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Student Discounts",
    description: "Unlock special savings tailored for students.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Women Discounts",
    description: "Discover exclusive deals designed for women shoppers.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sync the dark mode state with the HTML `dark` class
  useEffect(() => {
    document.documentElement.classList.add("dark");
    // if (darkMode) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
  }, [darkMode]);
  const pathname = usePathname();

  return (
    <header className="bg-gray-950">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width="264"
              height="264"
              alt=""
              src=""
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-4 lg:hidden">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 text-white rounded-md hover:bg-gray-700 focus:outline-none"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/" ? "text-cyan-400" : "text-white"
            }`}
          >
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Coupons
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-black/5">
              <div className="p-4">
                {coupons.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="#"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/compare" ? "text-cyan-400" : "text-white"
            }`}
          >
            Compare
          </Link>
          <Link
            href="#"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/about-us" ? "text-cyan-400" : "text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="#"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/All-Time" ? "text-cyan-400" : "text-white"
            }`}
          >
            All time
          </Link>
          <Link
            href="#"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/blogs" ? "text-cyan-400" : "text-white"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="#"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/support" ? "text-cyan-400" : "text-white"
            }`}
          >
            Support/Help
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-x-4 lg:justify-end">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 text-white rounded-md hover:bg-gray-700 focus:outline-none"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          <Link
            href="/login"
            className={`text-sm font-semibold leading-6 ${
              pathname === "/login" ? "text-cyan-400" : "text-white"
            }`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 bg-cyan-400 text-white py-2 px-4 rounded-md shadow-lg hover:bg-cyan-500 hover:shadow-xl transition-all duration-300"
          >
            Shop
          </Link>
        </div>
      </nav>
      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width="264"
                height="264"
                alt=""
                src=""
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-red-500" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-700">
                    Coupons
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                >
                  Compare
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                >
                  About US
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                >
                  Best Sellers
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
