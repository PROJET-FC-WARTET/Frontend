"use client";

import { navLinks, NavbarLink } from "@/config/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { cn } from "cn";
import Link from "next/link";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import { SVGProps } from "react";

type PropsWithClassName = {
  className?: string;
};

// Icon menu mobile (https://heroicons.com/)
const BurgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className={cn("size-6", props.className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);

// Liens de navigations
const NavLinks = (props: PropsWithClassName) => (
  <ul className={cn("space-x-4", props.className)}>
    {navLinks.map((link) => (
      <NavLink key={link.href} {...link} />
    ))}
  </ul>
);

const NavLink = (props: PropsWithClassName & NavbarLink) => {
  // Récupération la route actuelle du client
  const navigation = usePathname();

  const hoverEffect =
    "hover:after:absolute after:bottom-0 after:left-0 after:h-px after:bg-yellow after:w-full";

  return (
    <li
      className={cn(
        "hover:text-yellow text-lg uppercase relative",
        hoverEffect,
        props.className,
        navigation == props.href && "text-yellow",
      )}
    >
      <Link href={props.href}>{props.label}</Link>
    </li>
  );
};

// Boutons (function pour éviter la redondance)
const NavButtons = (props: PropsWithClassName) => (
  <>
    <Button variant="outline">Espace Club</Button>
    <Button>Rejoindre le club</Button>
  </>
);

// Composant principal : Barre de navigation
export default function Navbar() {
  return (
    <Disclosure
      as={"nav"}
      className="bg-green px-5 py-3 border-b-yellow border-b-4 font-condensed"
    >
      <div className="flex items-center w-full justify-between">
        <div>Logo</div>

        <NavLinks className="md:flex hidden" />

        <div className="md:flex space-x-2 hidden">
          <NavButtons />
        </div>

        {/* Menu mobile bouton */}
        <DisclosureButton
          className="md:hidden block cursor-pointer"
          aria-label="Bouton menu mobile"
        >
          <BurgerMenuIcon />
        </DisclosureButton>
      </div>

      {/*  Menu mobile */}
      <DisclosurePanel as="div" className="md:hidden py-3 space-y-2">
        <NavLinks />
        <div className="space-x-2">
          <NavButtons />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
