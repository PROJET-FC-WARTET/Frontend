/**
 * TODO : Configuration des éléments de la nav
 */

type NavbarLink = {
  href: string;
  name: string;
};

export const navLinks: NavbarLink[] = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Equipes",
    href: "/equipes",
  },
  {
    name: "Actualités",
    href: "/actualites",
  },
  {
    name: "Vie du club",
    href: "/vie-du-club",
  },
  {
    name: "Le club",
    href: "#",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
