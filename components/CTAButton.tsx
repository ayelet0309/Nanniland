import Link from "next/link";
import { REGISTRATION_URL } from "@/lib/constants";

type CTAButtonProps = {
  label: string;
  /** Optional second line rendered smaller beneath the label. */
  subtitle?: string;
  /** Overrides the default REGISTRATION_URL target. */
  href?: string;
  className?: string;
  size?: "lg" | "md";
};

export default function CTAButton({
  label,
  subtitle,
  href = REGISTRATION_URL,
  className = "",
  size = "lg",
}: CTAButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-9 py-4 text-lg"
      : "px-7 py-3.5 text-base";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={subtitle ? `${label} ${subtitle}` : label}
      className={`inline-flex flex-col items-center justify-center rounded-full bg-gold-dark ${sizeClasses} font-semibold text-cream shadow-soft transition-all duration-200 hover:bg-gold hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40 active:scale-[0.98] ${className}`}
    >
      <span className="leading-tight tracking-wide">{label}</span>
      {subtitle ? (
        <span className="text-sm font-medium leading-tight opacity-90">
          {subtitle}
        </span>
      ) : null}
    </Link>
  );
}
