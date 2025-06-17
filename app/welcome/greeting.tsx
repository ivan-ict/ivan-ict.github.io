import clsx from "clsx";
import { Twemoji } from "~/components/ui/twemoji";

export function Greeting() {
  return (
    <div
      className={clsx(
        "font-greeting font-extrabold tracking-tight",
        "text-[40px] leading-[60px] md:text-[68px] md:leading-[100px]",
        "bg-clip-text text-transparent",
        // https://github.com/tailwindlabs/tailwindcss/issues/16037
        "bg-[radial-gradient(ellipse_at_right,#ca8a04,#65a30d)]",
        "dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600"
      )}
    >
      G'day mates! <Twemoji emoji="waving-hand" size="base" />
    </div>
  );
}
