import Button from "./ui/Button";

/**
 * Barre de navigation
 */
export default function Navbar() {
  return (
    <nav className="bg-green">
      <div className="flex justify-between container">
        <div>Navigation</div>
        <Button>Test</Button>
      </div>
    </nav>
  );
}
