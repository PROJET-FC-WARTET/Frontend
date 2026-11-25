import Link from "next/link";
import Button from "./ui/Button";
import { navLinks } from "@/config/navigation";

/**
 * Barre de navigation
 */
export default function Navbar() {
  return (
    <nav className="bg-green px-5 py-3">
      <div className="flex justify-between container items-center">
        <div>Logo</div>
        <ul className="flex space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        <div className="space-x-2">
          <Button variant="outline">Espace club</Button>
          <Button>Rejoindre le club</Button>
        </div>
      </div>
    </nav>
  );
}
