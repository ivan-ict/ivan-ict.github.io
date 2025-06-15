import { Link as RouterLink } from "react-router";
import type { AnchorHTMLAttributes } from "react";
import { clsx } from "clsx";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  underline?: boolean; // New prop for underline styling
}

export function Link({
  href,
  underline = false,
  className,
  ...rest
}: LinkProps) {
  const isInternalLink = href?.startsWith("/");
  const isAnchorLink = href?.startsWith("#");

  const linkClasses = clsx(
    "break-words",
    underline && "underline underline-offset-4 hover:no-underline",
    className
  );

  if (isInternalLink) {
    return <RouterLink className={linkClasses} to={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <a className={linkClasses} href={href} {...rest} />;
  }

  return (
    <a
      className={linkClasses}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
}
