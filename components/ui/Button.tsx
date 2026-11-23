import { cn } from "cn";
import { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-yellow hover:bg-light-yellow text-black",
  outline: "border border-white hover:bg-white hover:text-black",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

/**
 * Bouton générique avec variances
 * @example <Button variant="outline">Notre Histoire</Button>
 */
export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  const base = "px-8 py-4 rounded-sm font-semibold uppercase";

  return (
    <button
      {...props}
      className={cn(base, "duration-300", variants[variant], className)}
    >
      {children}
    </button>
  );
}
