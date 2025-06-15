import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Twemoji } from "~/components/ui/twemoji";

function createTypedInstance(selector: string) {
  return new Typed(selector, {
    stringsElement: "#bios",
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  });
}

export function TypedBios() {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const elementId = useRef(
    `typed-element-${Math.random().toString(36).substring(2, 11)}`
  );

  useEffect(() => {
    if (el.current) {
      // Clean up previous instance
      typed.current?.destroy();

      // Set the id on the element
      el.current.id = elementId.current;

      // Create new instance using CSS selector
      typed.current = createTypedInstance(`#${elementId.current}`);
    }

    // Cleanup on unmount
    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div
      className={clsx([
        "flex min-h-8 items-center gap-0.5",
        [
          "[&_.typed-cursor]:inline-block",
          "[&_.typed-cursor]:w-2",
          "[&_.typed-cursor]:h-5.5",
          "[&_.typed-cursor]:text-transparent",
          "[&_.typed-cursor]:bg-slate-800",
          "dark:[&_.typed-cursor]:bg-slate-100",
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <span className="font-medium">Ivan</span> at work.
        </li>
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>I live in Melbourne, Melbourne.</li>
        <li>I was born in the beautiful Prague city.</li>
        <li>My first programming language I learned was Pascal.</li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce software.</li>
        <li>I work mostly with JS/TS technologies.</li>
        <li>I'm lorem ipsum.</li>
        <li>
          I'm a lorem ipsum. <Twemoji emoji="dog" />
        </li>
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
        </li>
        <li>I love watching football.</li>
        <li>
          I love playing piano & guitar. <Twemoji emoji="musical-keyboard" /> &{" "}
          <Twemoji emoji="guitar" />
        </li>
        <li>I love rock music.</li>
        <li>
          I love playing chess. <Twemoji emoji="chess-pawn" />
        </li>
        <li>
          I love playing video games, PES is my favorite one.{" "}
          <Twemoji emoji="video-game" />.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
}
