type Props = {
  children: React.ReactNode;
};

/**
 * Bouton générique
 *
 * TODO: Variantes (couleurs, outline...)
 */
export default function Button({ children }: Props) {
  return (
    <button className="bg-yellow px-4 p-6 hover:bg-light-yellow">
      {children}
    </button>
  );
}
