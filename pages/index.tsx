import Head from 'next/head';
import Link, { type LinkProps } from 'next/link';

import { Container } from '@components/container';
import { Icons } from '@components/icons';
import { Resume } from '@components/resume';
import { Tech } from '@components/tech';

type SocialLinkProps = LinkProps & { icon: (typeof Icons)[keyof typeof Icons] };

const SocialLink = ({ icon: Icon, ...props }: SocialLinkProps) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Arthur Eberle - Personal Website</title>
        <meta
          name="description"
          content="I'm a passionate web developer from Nuremberg. Check my page for more info about the tech I use and which projects i've worked on."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey,
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m a passionate web developer from Nuremberg who works on
            various projects in his spare time. I&apos;m currently completing my
            Master&apos;s degree in Computer Science at the Georg Simon Ohm
            University of Applied Sciences in Nuremberg and work at DATEV eG in
            the UX/CX department as a Fullstack Developer.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/arthureberledev"
              aria-label="Follow on Twitter"
              icon={Icons.twitter}
            />
            <SocialLink
              href="https://github.com/arthureberledev"
              aria-label="Follow on GitHub"
              icon={Icons.github}
            />
            <SocialLink
              href="https://www.linkedin.com/in/arthur-eberle-525787224/"
              aria-label="Follow on LinkedIn"
              icon={Icons.linkedIn}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-12">
          <div className="col-span-7">
            <Tech />
          </div>
          <div className="col-span-5 space-y-10 lg:pl-16 xl:pl-20">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
