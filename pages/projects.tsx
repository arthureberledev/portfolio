import Head from 'next/head';
import Image from 'next/image';

import { Card } from '@components/card';
import { Icons } from '@components/icons';
import { SimpleLayout } from '@components/simple-layout';

import derSekretaerLogo from '@images/logos/der-sekretaer.webp';
import lovemadepresentsLogo from '@images/logos/lovemadepresents.svg';
import neroLogo from '@images/logos/nero.png';
import qriginalsLogo from '@images/logos/qriginals.png';

const projects = [
  {
    name: 'Nero',
    description:
    'AI-driven document editor that integrates a chatbot feature. The system conducts a similarity search to ensure context-aware question answering. Additionally, it boasts agent integration, optimizing both planning and execution processes.',
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
        type: 'Vector Database',
        name: 'Supabase/Pinecone',
      },
      {
        type: 'Payments',
        name: 'Stripe',
      },
      {
        type: 'AI',
        name: 'Langchain/OpenAI',
      },
      {
        type: 'Hosting',
        name: 'Supabase/Vercel',
      },
    ],
    link: {
      href: 'https://www.usenero.com/',
      label: 'usenero.com',
    },
    logo: neroLogo,
  },
  // {
  //   name: 'Socialnetplans',
  //   description:
  //     'Marketing website for a social media agency in Nuremberg, Germany.',
  //   stack: [
  //     {
  //       type: 'Frontend',
  //       name: 'Astro',
  //     },
  //     {
  //       type: 'Styling',
  //       name: 'TailwindCSS',
  //     },
  //     {
  //       type: 'Hosting',
  //       name: 'Netlify',
  //     },
  //   ],
  //   link: {
  //     href: 'https://socialnetplans.de/',
  //     label: 'socialnetplans.de',
  //   },
  //   logo: socialnetplansLogo,
  // },
  {
    name: 'Qriginals',
    description:
      'AI-driven QR Code generator that provides a platform where users can create and share QR Code art. It uses a stable diffusion model to ensure the QR Code art is visually appealing. Additionally, it features a user-friendly interface that makes exploring a breeze.',
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
      {
        type: 'Hosting',
        name: 'Supabase/Vercel',
      },
    ],
    link: {
      href: 'https://www.qriginals.com',
      label: 'qriginals.com',
    },
    logo: qriginalsLogo,
  },
  {
    name: 'Der Sekretär',
    description:
      'Marketing website for a real-estate agency in Nuremberg, Germany.',
    stack: [
      {
        type: 'Frontend',
        name: 'Astro/React',
      },
      {
        type: 'Styling',
        name: 'TailwindCSS',
      },
      {
        type: 'Hosting',
        name: 'Netlify',
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
      'E-Commerce shop for handmade products in Nuremberg, Germany. Some key features are product customizations and organization through the content management system, custom cart and coupon system, payments, auth and session management.',
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
      {
        type: 'Hosting',
        name: 'Railway/Netlify',
      },
    ],
    link: {
      href: 'https://lovemadepresents.vercel.app/',
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
              <div className="group relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
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
                  <li key={tech.name} className="text-zinc-500">
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
