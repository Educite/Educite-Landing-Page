import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import React from "react";

export default function Navbar() {
  const navigation = [
    { name: "Product", href: "/product" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Company", href: "/company" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between px-3 sm:px-4 py-3 sm:py-5 mx-auto md:px-8 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/" className="flex items-center space-x-2 text-lg sm:text-xl md:text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <img
                      src="/img/Educite-Logo.svg"
                      alt="Educite Kenya"
                      width="32"
                      height="32"
                      className="w-6 sm:w-7 md:w-8"
                    />
                  </span>
                  <span>Educite Kenya</span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-3 sm:my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href} className="w-full px-4 py-2 text-sm sm:text-base text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700">
                        {item.name}
                      </Link>
                    ))}
                    <Link href="/get-started" className="w-full px-4 sm:px-6 py-2 mt-3 text-sm sm:text-base text-center text-white bg-indigo-600 rounded-md">
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href} className="inline-block px-3 sm:px-4 py-2 text-base font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-2 sm:mr-3 space-x-2 sm:space-x-3 lg:flex nav__item">
          <Link href="/get-started" className="px-3 py-1.5 sm:px-4 md:px-6 sm:py-2 text-sm md:text-base text-white bg-indigo-600 rounded-md">
            Get Started
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
