import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { Image } from "~/components/ui/image";
import { Link } from "~/components/ui/link";
import { Twemoji } from "~/components/ui/twemoji";
import { GrowingUnderline } from "~/components/ui/growing-underline";

const EXPERIENCES = [
  {
    org: "Swinburne University",
    url: "https://www.swinburne.edu.au/",
    logo: "/static/images/logo.jpg",
    start: "Mar 2022",
    end: "Present",
    title: "CTO / Co.Founder / Software Engineer",
    icon: "briefcase",
    event: "career-swinburne",
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Building a smart{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://weaverse.io/demo"
            >
              Shopify Hydrogen Theme Customizer
            </a>{" "}
            to help creators build their own high quality and high performance
            headless storefronts easily.
          </li>
        </ul>
      );
    },
  },
  {
    org: "DFKSoft",
    url: "http://dfk-com.vn/",
    logo: "/static/images/logo.jpg",
    start: "May 2021",
    end: "Feb 2022",
    title: "Senior Software Engineer",
    icon: "man-technologist",
    event: "career-dfksoft",
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Built{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968"
            >
              Minimog
            </a>{" "}
            - a multipurpose Shopify Theme (top best selling templates on Envato
            Market)
          </li>
          <li>
            Built{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.shopify.com/foxecom-boost-sales"
            >
              Fox Kit Shopify App
            </a>{" "}
            - The upsells and boost conversion tool built to support Minimog
            theme
          </li>
        </ul>
      );
    },
  },
  {
    org: "Prime Data",
    url: "http://primedata.ai/",
    logo: "/static/images/logo.jpg",
    start: "May 2020",
    end: "Apr 2021",
    title: "Frontend Engineer",
    icon: "man-technologist",
    event: "career-primedata",
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Working on the <strong>#1 web browser & search engine</strong> in{" "}
            <strong>Viet Nam</strong> (30M+ users)
          </li>
          <li>
            Built{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://coccoc.com/webhp"
            >
              Coc Coc's newsfeed
            </a>
          </li>
          <li>Maintained and optimized new tab's widgets and performance</li>
        </ul>
      );
    },
  },
  {
    org: "Antsomi",
    url: "https://www.antsomi.com/",
    logo: "/static/images/logo.jpg",
    start: "Aug 2018",
    end: "Apr 2020",
    title: "Fullstack Developer",
    icon: "man-technologist",
    event: "career-antsomi",
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Working on the #1 Page Builder app on Shopify app store</li>
          <li>Built Pagefly's Analytics APIs</li>
          <li>
            Built{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sellersmith/slider-x"
            >
              Slider-x
            </a>
          </li>
        </ul>
      );
    },
  },
  {
    org: "DFK Software",
    url: "http://dfk-com.vn/",
    logo: "/static/images/logo.jpg",
    start: "May 2017",
    end: "Jul 2018",
    title: "Instructor and Developer",
    icon: "man-technologist",
    event: "career-dfk",
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Built{" "}
            <a target="_blank" rel="noopener noreferrer" href="http://lok.vn/">
              Love of Knowledge
            </a>{" "}
            (Front-end Developer)
          </li>
          <li>
            Built{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ivan-ict/ivan-ict.github.io"
            >
              Room Finder APIs
            </a>{" "}
            (Back-end Developer)
          </li>
          <li>
            Built{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ivan-ict/ivan-ict.github.io"
            >
              Travel Egypt
            </a>{" "}
            - a picture puzzle game made by pygame (Python)
          </li>
          <li>
            Mentored Python fundamentals and Python web development for newbies
          </li>
        </ul>
      );
    },
  },
  {
    org: "FPT University HCMC",
    url: "https://daihoc.fpt.edu.vn/en/",
    logo: "/static/images/logo.jpg",
    start: "Sep 2013",
    end: "Feb 2019",
    title: "Student at SEEE (School of Electrical & Electronic Engineering)",
    icon: "man-student",
    event: "career-fptu",
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Get a good degree at{" "}
            <strong>School of Electrical & Electronic Engineering</strong>
          </li>
          <li>
            And yeah! My major subject was{" "}
            <strong>Electronics and Telecommunications</strong>, but I couldn't
            find interest in that field. So I learned Software Engineering
            instead, and became what I am today.
          </li>
        </ul>
      );
    },
  },
];

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  );
}

function TimelineItem({
  exp,
  last,
}: {
  exp: (typeof EXPERIENCES)[0];
  last?: boolean;
}) {
  let {
    org,
    title,
    icon,
    url,
    logo,
    start,
    end,
    event,
    details: Details,
  } = exp;
  return (
    <div
      className={clsx(
        "group/timeline-item",
        "relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3",
        "cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
        !last && [
          "before:absolute before:left-9 before:top-15",
          "before:h-full before:w-px",
          "before:bg-gray-300 dark:before:bg-gray-500",
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: "contain" }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              "plus",
              "group-hover/timeline-item:visible md:invisible",
              "absolute right-1 top-1",
              "transition-transform duration-300 ease-in-out",
              "text-gray-600 dark:text-gray-500",
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              "minus hidden",
              "absolute right-1 top-1",
              "transition-transform duration-300 ease-in-out",
              "text-gray-600 dark:text-gray-500",
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>
                {org}
              </GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  );
}
