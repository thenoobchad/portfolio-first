"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] font-extrabold text-[#00ff99]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <SheetTitle className="text-4xl text-white font-semibold font-moo">
              Chidi<span className="text-[#00e817]">.</span>
            </SheetTitle>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-[#00e187] border-b-3 border-[#00e187]"
                } text-xl capitalize hover:text-[#00e187] transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
