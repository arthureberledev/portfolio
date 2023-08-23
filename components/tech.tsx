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
        <div className="absolute -right-2 -top-2 z-10 h-8 w-8 overflow-hidden rounded shadow">
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
      <div className="animate-in fade-in slide-in-from-left-5 duration-200">
        <TechItem
          logo={Logos.javascript}
          bgColor="rgb(239, 219, 80)"
          title="HTML/CSS/JS"
          description="The languages of the browser - I work with it on a daily basis."
          href="https://www.javascript.com/"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-left-5 duration-200">
        <TechItem
          logo={Logos.typescript}
          bgColor="rgb(0, 122, 204)"
          title="TypeScript"
          description="My main language to start a new project."
          href="https://www.typescriptlang.org/"
        />
      </div>

      <div className="animate-in fade-in slide-in-from-left-5 duration-300">
        <TechItem
          logo={Logos.react}
          bgColor="rgb(97, 219, 251)"
          title="React.js"
          description="The first web framework I learned and I still love it."
          href="https://reactjs.org/"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-left-5 duration-300">
        <TechItem
          logo={Logos.nextjs}
          bgColor="rgb(102, 102, 102)"
          title="Next.js"
          description="My go-to framework. Also used to built this site."
          href="https://nextjs.org/"
        />
      </div>

      <div className="animate-in fade-in slide-in-from-left-5 duration-500">
        <TechItem
          logo={Logos.astro}
          bgColor="rgb(255, 93, 1)"
          title="Astro"
          description="Awesome new framework for building extremely fast static websites."
          href="https://astro.build/"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-left-5 duration-500">
        <TechItem
          logo={Logos.angular}
          bgColor="rgb(221, 0, 49)"
          title="Angular"
          description="Using it along with RxJS to build web apps at my current job."
          href="https://angular.io/"
        />
      </div>

      <div className="animate-in fade-in slide-in-from-left-5 duration-700">
        <TechItem
          logo={Logos.tailwind}
          bgColor="rgb(7, 182, 213)"
          title="TailwindCSS"
          description="My go-to for styling stuff. It's easy to customize and it adapts to any design."
          href="https://tailwindcss.com/"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-left-5 duration-700">
        <TechItem
          logo={Logos.supabase}
          bgColor="rgb(60, 208, 142)"
          title="Supabase"
          description="An open-source alternative to Firebase, offering db, auth, storage and more."
          href="https://supabase.com/"
        />
      </div>

      <div className="animate-in fade-in slide-in-from-left-5 duration-1000">
        <TechItem
          logo={Logos.cypress}
          bgColor="rgb(128, 128, 128)"
          title="Cypress"
          description="An end-to-end testing tool designed for modern web test automation."
          href="https://www.cypress.io/"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-left-5 duration-1000">
        <TechItem
          logo={Logos.jest}
          bgColor="rgb(198, 61, 20)"
          title="Jest"
          description="A delightful JavaScript Testing Framework which I use for unit testing."
          href="https://jestjs.io/"
        />
      </div>

      <div className="animate-in fade-in slide-in-from-left-5 duration-1000">
        <TechItem
          logo={Logos.playwright}
          bgColor="rgb(29, 141, 34)"
          title="Playwright"
          description="A cutting-edge framework for end-to-end testing across multiple browsers."
          href="https://playwright.dev/"
        />
      </div>
      <div className="animate-in fade-in slide-in-from-left-5 duration-1000">
        <TechItem
          logo={Logos.openai}
          bgColor="rgb(161, 121, 220)"
          title="OpenAI"
          description="Used OpenAI's API extensively for a couple of applications."
          href="https://openai.com/"
        />
      </div>

      <div className="col-span-2 animate-in fade-in slide-in-from-left-5 duration-1000">
        <TechItem
          as="div"
          logo={Logos.squareBrackets}
          bgColor="rgb(182, 182, 182)"
          className="cursor-pointer"
          title="And many more..."
          description="Serverless, CMS, PostgreSQL, MySQL, Git and PNPM are some of the tools and technologies I use on a daily basis, but I am constantly learning about new ones."
          href="#"
        />
      </div>
    </div>
  );
};
