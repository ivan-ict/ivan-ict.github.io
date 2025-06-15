import clsx from "clsx";
import type { ReactNode } from "react";

export function Container({
  children,
  as: Component = "section",
  className,
}: {
  children: ReactNode;
  as?: React.ElementType;
  className?: string;
}) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-6xl ps-4 pe-4 sm:ps-6 sm:pe-6 xl:ps-12 xl:pe-12",
        className
      )}
    >
      {children}
    </Component>
  );
}
