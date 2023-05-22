import Head from 'next/head';
import Image from 'next/image';

import { Card } from '@components/card';
import { Icons } from '@components/icons';
import { SimpleLayout } from '@components/simple-layout';

import derSekretaerLogo from '@images/logos/der-sekretaer.webp';
import konteriaLogo from '@images/logos/konteria.webp';
import lovemadepresentsLogo from '@images/logos/lovemadepresents.svg';
import metalExpressLogo from '@images/logos/metal-express.svg';

const projects = [
  {
    name: 'Konteria',
    description:
      'SaaS App where users can generate content for social media with the help of AI. The Stack includes NextJS for the App and Astro for the Landing Page, TailwindCSS for the Styling and MySQL as the DB.',
    link: {
      href: 'https://www.konteria.com',
      label: 'konteria.com',
    },
    logo: konteriaLogo,
  },
  {
    name: 'Der Sekretär',
    description:
      'Website for a real estate agency in Nuremberg. The frontend is built with Astro combined with TailwindCSS and React for dynamic content.',
    link: {
      href: 'https://xn--dersekretr-y5a.de/',
      label: 'dersekretär.de',
    },
    logo: derSekretaerLogo,
  },
  {
    name: 'Lovemade Presents',
    description:
      'E-commerce store for handmade products. Frontend is built with Next.js 13 and TailwindCSS. Backend is built with Strapi CMS and Postgres. Some key features are product customizations, custom cart and coupon system, payments, auth and session management.',
    link: {
      href: 'https://lovemadepresents.de/',
      label: 'lovemadepresents.de',
    },
    logo: lovemadepresentsLogo,
  },
  {
    name: 'Metal Express',
    description:
      'API that returns the current and historical prices of metals in different currencies. Fetches the prices daily and writes them into a DB. Built with Node.js, Express, Puppeteer, Cheerio and Postgres. The project is now open source but will not be maintained anymore.',
    link: {
      href: 'https://github.com/arthureberledev/metal-express',
      label: 'github.com',
    },
    logo: metalExpressLogo,
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Arthur Eberle</title>
        <meta
          name="description"
          content="Things I've made trying to bring my ideas to reality."
        />
      </Head>
      <SimpleLayout
        title="Things I've made trying to bring my ideas to reality."
        intro="I've worked on a lot of little projects over the years but these are the ones that I'm most proud of. They are not a lot, but considering the time i have put into them, they surely occupied the most of my spare time."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt="project logo"
                  className="h-full w-full bg-white object-contain p-1"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <Icons.link className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
