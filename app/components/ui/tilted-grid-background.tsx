import { clsx } from "clsx";
// import TiltedGrid from "~/icons/tilted-grid";
import TiltedGrid from "~/icons/tilted-grid.svg?react";

export function TiltedGridBackground({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "absolute overflow-hidden [mask-image:linear-gradient(white,transparent)]",
        className
      )}
    >
      <TiltedGrid
        className={clsx(
          "size-[160%]",
          "absolute inset-x-0 inset-y-[-30%] skew-y-[-18deg]",
          "dark:fill-white/[.01] dark:stroke-white/[.025]",
          "fill-black/20 stroke-black/50",
          "select-none"
        )}
      />
    </div>
  );
}
