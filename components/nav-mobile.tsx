import { Popover, Transition } from '@headlessui/react';
import Link, { type LinkProps } from 'next/link';
import { Fragment, HTMLAttributes, type ReactNode } from 'react';

import { Icons } from '@components/icons';

type NavItemProps = LinkProps & { children: ReactNode };

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
};

type NavMobileProps = HTMLAttributes<HTMLDivElement>;

export const NavMobile = (props: NavMobileProps) => {
  return (
    <Popover {...props}>
      <Popover.Button className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <Icons.chevronDown className="w-2 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="p-1 -m-1">
                <Icons.close className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="/uses">Uses</NavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};
