import Head from 'next/head';
import Image from 'next/image';

import { Card } from '@components/card';
import { Icons } from '@components/icons';
import { SimpleLayout } from '@components/simple-layout';

import derSekretaerLogo from '@images/logos/der-sekretaer.webp';
import konteriaLogo from '@images/logos/konteria.webp';
import lovemadepresentsLogo from '@images/logos/lovemadepresents.svg';
import qriginalsLogo from '@images/logos/qriginals.png';

const projects = [
  {
    name: 'Qriginals',
    description:
      'AI-driven QR code generator allowing others to view, appreciate, and utilize QR code designs.',
    stack: [
      {
        type: 'Frontend/Backend',
        name: 'Next.js',
      },
      {
        type: 'Styling',
        name: 'TailwindCSS',
      },
      {
        type: 'Database/Auth/Storage',
        name: 'Supabase',
      },
      {
        type: 'Payments',
        name: 'Stripe',
      },
      {
        type: 'AI',
        name: 'OpenAI/Replicate',
      },
    ],
    link: {
      href: 'https://www.qriginals.com',
      label: 'qriginals.com',
    },
    logo: qriginalsLogo,
  },
  {
    name: 'Konteria',
    description:
      'Software-as-a-Service where Users can generate content for social media with the help of AI.',
    stack: [
      {
        type: 'Frontend/Backend',
        name: 'Next.js',
      },
      {
        type: 'Marketing Page',
        name: 'Astro',
      },
      {
        type: 'Styling',
        name: 'TailwindCSS',
      },
      {
        type: 'Database',
        name: 'Planetscale (MySQL)',
      },
      {
        type: 'AI',
        name: 'OpenAI',
      },
    ],
    link: {
      href: 'https://www.konteria.com',
      label: 'konteria.com',
    },
    logo: konteriaLogo,
  },
  {
    name: 'Der Sekretär',
    description:
      'Marketing Website for a Real Estate Agency in Nuremberg, Germany.',
    stack: [
      {
        type: 'Frontend',
        name: 'Astro/React',
      },
      {
        type: 'Styling',
        name: 'TailwindCSS',
      },
    ],
    link: {
      href: 'https://xn--dersekretr-y5a.de/',
      label: 'dersekretär.de',
    },
    logo: derSekretaerLogo,
  },
  {
    name: 'Lovemade Presents',
    description:
      'E-Commerce Website for handmade products in Nuremberg, Germany. Some key features are product customizations and organization through the content management system, custom cart and coupon system, payments, auth and session management.',
    stack: [
      {
        type: 'Frontend',
        name: 'Next.js',
      },
      {
        type: 'Styling',
        name: 'TailwindCSS',
      },
      {
        type: 'Backend/CMS',
        name: 'Strapi',
      },
      {
        type: 'Database',
        name: 'Postgres',
      },
      {
        type: 'Payments',
        name: 'PayPal',
      },
      {
        type: 'Auth',
        name: 'NextAuth',
      },
    ],
    link: {
      href: 'https://lovemadepresents.de/',
      label: 'lovemadepresents.de',
    },
    logo: lovemadepresentsLogo,
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
              <ul className="mt-2 list-inside list-disc space-y-2 text-xs">
                {project.stack.map((tech) => (
                  <li
                    key={tech.name}
                    className="text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="font-medium">{tech.type}</span>:{' '}
                    {tech.name}
                  </li>
                ))}
              </ul>
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
