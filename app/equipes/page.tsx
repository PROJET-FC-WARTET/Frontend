import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipes",
};

/**
 * Page des équipes
 */
export default function Teams() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Equipes</h1>
    </div>
  );
}
