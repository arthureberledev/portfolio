import clsx from 'clsx';
import type { AnchorHTMLAttributes, ElementType } from 'react';

import { Logos } from './logos';

type TechItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: ElementType;
  logo: any;
  bgColor: string;
  title: string;
  description: string;
};

const TechItem = ({
  as: Component = 'a',
  logo: Logo,
  bgColor,
  title,
  description,
  href,
  className,
  ...props
}: TechItemProps) => {
  return (
    <div
      className={clsx(
        'group relative h-full rounded border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700/40 dark:bg-zinc-800/50',
        className
      )}
    >
      <Component
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...props}
      >
        <div className="absolute z-10 w-8 h-8 overflow-hidden rounded shadow -right-2 -top-2">
          <Logo />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-8 -top-12 h-20 w-20 transform-gpu rounded blur-3xl transition-all duration-700 group-hover:h-40 group-hover:w-40 group-hover:blur-[128px]"
            style={{
              background: bgColor,
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            {title}
          </span>
          <p className="z-10 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </Component>
    </div>
  );
};

export const Tech = () => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:col-start-1">
      <div className="duration-200 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.javascript}
          bgColor="rgb(239, 219, 80)"
          title="HTML/CSS/JS"
          description="The languages of the browser - I work with it on a daily basis."
          href="https://www.javascript.com/"
        />
      </div>
      <div className="duration-200 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.typescript}
          bgColor="rgb(0, 122, 204)"
          title="TypeScript"
          description="My main language to start a new project."
          href="https://www.typescriptlang.org/"
        />
      </div>

      <div className="duration-300 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.react}
          bgColor="rgb(97, 219, 251)"
          title="React.js"
          description="The first web framework I learned and I still love it."
          href="https://reactjs.org/"
        />
      </div>
      <div className="duration-300 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.nextjs}
          bgColor="rgb(102, 102, 102)"
          title="Next.js"
          description="My go-to framework. Also used to built this site."
          href="https://nextjs.org/"
        />
      </div>

      <div className="duration-500 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.angular}
          bgColor="rgb(221, 0, 49)"
          title="Angular"
          description="Using it along with RxJS to build web apps at my current job."
          href="https://angular.io/"
        />
      </div>
      <div className="duration-500 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.astro}
          bgColor="rgb(255, 93, 1)"
          title="Astro"
          description="Awesome new framework for building extremely fast static websites."
          href="https://astro.build/"
        />
      </div>

      <div className="duration-700 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.tailwind}
          bgColor="rgb(7, 182, 213)"
          title="TailwindCSS"
          description="My go-to for styling stuff. It's easy to customize and it adapts to any design."
          href="https://tailwindcss.com/"
        />
      </div>
      <div className="duration-700 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.mui}
          bgColor="rgb(0, 129, 203)"
          title="Material UI"
          description="A simple, customizable, and accessible library of React components."
          href="https://mui.com/"
        />
      </div>

      <div className="duration-1000 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.cypress}
          bgColor="rgb(128, 128, 128)"
          title="Cypress"
          description="An end-to-end testing tool designed for modern web test automation."
          href="https://www.cypress.io/"
        />
      </div>
      <div className="duration-1000 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.jest}
          bgColor="rgb(198, 61, 20)"
          title="Jest"
          description="A delightful JavaScript Testing Framework which I use for unit testing."
          href="https://jestjs.io/"
        />
      </div>

      <div className="duration-1000 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.strapi}
          bgColor="rgb(149, 147, 255)"
          title="Strapi"
          description="A popular CMS written in JS. Have used it for an e-commerce store."
          href="https://strapi.io/"
        />
      </div>
      <div className="duration-1000 animate-in fade-in slide-in-from-left-5">
        <TechItem
          logo={Logos.cSharp}
          bgColor="rgb(161, 121, 220)"
          title="C#"
          description="Used extensively during lectures, at work and in game development."
          href="https://learn.microsoft.com/de-de/dotnet/csharp/"
        />
      </div>

      <div className="col-span-2 duration-1000 animate-in fade-in slide-in-from-left-5">
        <TechItem
          as="div"
          logo={Logos.squareBrackets}
          bgColor="rgb(182, 182, 182)"
          className="cursor-pointer"
          title="And many more..."
          description="Git, GitHub, GitLab, NPM, Yarn, HeadlessUI and RadixUI are some of the tools I use on a daily basis, but I'm still constantly learning about new technologies."
          href="#"
        />
      </div>
    </div>
  );
};
