// src/data/navbar-links.ts
export interface NavbarLink {
  title: string;
  path: string;
}

export const NavbarLinks: NavbarLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Therapists",
    path: '/therapists',
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
