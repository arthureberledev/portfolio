import Head from 'next/head';
import type { ReactNode } from 'react';

import { Card } from '@components/card';
import { Section, type SectionProps } from '@components/section';
import { SimpleLayout } from '@components/simple-layout';

type ToolSectionProps = SectionProps;

const ToolSection = ({ children, ...props }: ToolSectionProps) => {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
};

type ToolProps = { title: string; href?: string; children: ReactNode };

function Tool({ title, href, children }: ToolProps) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Arthur Eberle</title>
        <meta
          name="description"
          content="Software I use and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use and other things I recommend."
        intro="Here's a big list of my favorite stuff I use to build software and stay productive."
      >
        <div className="space-y-20">
          <ToolSection title="Workstation">
            <Tool title="Windows PC with an AMD RX 6700 XT, AMD Ryzen 5 5600 and 32 GB RAM">
              My main workstation. I use this for gaming, coding, university
              stuff and for running Windows-only software.
            </Tool>
            <Tool title="1x LG 27GL850 and 2x Dell P2419H Monitors">
              Three monitors are better than one. I use the LG for gaming and
              coding and the Dell&apos;s as an addition.
            </Tool>
            <Tool title='Apple MacBook Air 13" M1 16 GB'>
              My secondary workstation. I use this whenever I am not at home.
            </Tool>
            <Tool title="Steelseries Apex Pro Keyboard">
              Mechanical Gaming Keyboard with customizable actuation, OLED Smart
              Display and German Keyboard (QWERTZ).
            </Tool>
            <Tool title="Logitech G502 Hero">
              High-performance gaming mouse with a 25K DPI optical sensor, RGB
              lighting, weight tuning and 11 programmable buttons.
            </Tool>
            <Tool title="Profim XENON 111 SFL Net Chair">
              If I&apos;m going to slouch in the worst ergonomic position
              imaginable all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolSection>
          <ToolSection title="Development tools">
            <Tool title="Visual Studio Code">
              One of the best editors for me. I use it everywhere, at home, work
              and for lecture exercises. Thanks to the numerous extensions, I
              can customize the editor according to my needs and thus increase
              my productivity even more.
            </Tool>
            <Tool title="Thunder Client">
              Thunder Client is a lightweight Rest API Client Extension for
              Visual Studio Code, that helps me to test my APIs quickly.
            </Tool>
            <Tool title="Responsively App">
              Previews all target screens in a single window side-by-side.
            </Tool>
          </ToolSection>
          <ToolSection title="Design">
            <Tool title="Figma">
              Used as a design tool for templating my ideas for my projects.
              Also helps a lot at collaborating with clients.
            </Tool>
          </ToolSection>
          <ToolSection title="Productivity">
            <Tool title="Evernote">
              Evernote is an online service that supports me at collecting,
              organizing and finding my notes and documents.
            </Tool>
          </ToolSection>
        </div>
      </SimpleLayout>
    </>
  );
}
