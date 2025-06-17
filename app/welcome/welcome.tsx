import { Container } from "~/components/ui/container";
import { Twemoji } from "~/components/ui/twemoji";
import { Greeting } from "./greeting";
import { Intro } from "./intro";
import { TypedBios } from "./typed-bios";
import { BlogLinks } from "./links";
import { ProfileCard } from "~/components/cards/profile";

export function Welcome() {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pe-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600/90 dark:text-gray-400/90 md:text-lg md:leading-8">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-4 md:mb-8">
              <p>
                I started learning to code in 2016 and have been hooked ever
                since.
              </p>
              <p>I landed my first job as a Python coding mentor in 2017.</p>
              <p>I have a passion for JS/TS, web dev, and eCommerce.</p>
              <p>
                I started this blog to document and share my knowledge &
                experience.
              </p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="me-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden ps-4 pt-8 xl:block">
          <ProfileCard />
        </div>
      </div>
    </Container>
  );
}
