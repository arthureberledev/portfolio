import Image from 'next/image';

import { Icons } from '@components/icons';

import datevLogo from '@images/logos/datev.svg';
import ohmLogo from '@images/logos/ohm.png';

type RoleEnd = { label: string; dateTime: number };

const work = [
  {
    id: 1,
    company: 'DATEV eG',
    title: 'Fullstack Developer',
    logo: datevLogo,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    id: 2,
    company: 'DATEV eG',
    title: 'Test Engineer',
    logo: datevLogo,
    start: '2020',
    end: '2022',
  },
];

const education = [
  {
    id: 1,
    university: 'Georg Simon Ohm University of Applied Sciences',
    title: 'Master of Science',
    degree: 'Computer Science',
    logo: ohmLogo,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    id: 2,
    university: 'Georg Simon Ohm University of Applied Sciences',
    title: 'Bachelor of Engineering',
    degree: 'Media Engineering',
    logo: ohmLogo,
    start: '2017',
    end: '2022',
  },
];

export const Resume = () => {
  return (
    <>
      <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <Icons.briefcase className="flex-none w-6 h-6" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {work.map((role) => (
            <li key={role.id} className="flex gap-4">
              <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 transition-transform duration-1000 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 animate-in fade-in slide-in-from-left-3 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={role.logo}
                  alt={role.company + ' - ' + role.title}
                  className="h-7 w-7"
                />
              </div>
              <dl className="flex flex-wrap flex-auto gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start} until ${
                    (role.end as RoleEnd).label && role.end
                  }`}
                >
                  <time dateTime={role.start}>{role.start}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time
                    dateTime={
                      (role.end as RoleEnd).dateTime?.toString() ?? role.end
                    }
                  >
                    {(role.end as RoleEnd).label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
      <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <Icons.academic className="flex-none w-6 h-6" />
          <span className="ml-3">Education</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {education.map((role) => (
            <li key={role.id} className="flex gap-4">
              <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 transition-transform duration-1000 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 animate-in fade-in slide-in-from-left-3 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={role.logo}
                  alt={role.university}
                  className="h-7 w-7"
                />
              </div>
              <dl className="flex flex-wrap flex-auto gap-x-2">
                <dt className="sr-only">University</dt>
                <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.university}
                </dd>
                <div>
                  <dt className="sr-only">Title</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.title}
                  </dd>
                  <dt className="sr-only">Degree</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.degree}
                  </dd>
                </div>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start} until ${
                    (role.end as RoleEnd).label && role.end
                  }`}
                >
                  <time dateTime={role.start}>{role.start}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time
                    dateTime={
                      (role.end as RoleEnd).dateTime?.toString() ?? role.end
                    }
                  >
                    {(role.end as RoleEnd).label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
