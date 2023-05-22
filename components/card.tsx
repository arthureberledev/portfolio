import clsx, { type ClassValue } from 'clsx';
import Link, { type LinkProps } from 'next/link';
import type { ElementType, ReactNode } from 'react';
import { Icons } from './icons';

type CardProps = {
  as?: ElementType;
  className?: ClassValue;
  children: ReactNode;
};

export function Card({
  as: Component = 'div',
  className,
  children,
}: CardProps) {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  );
}

type CardLinkProps = LinkProps & { children: ReactNode };

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

type CardTitleProps = {
  as?: ElementType;
  href?: LinkProps['href'];
  children: ReactNode;
};

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children,
}: CardTitleProps) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

type CardDescription = { children: ReactNode };

Card.Description = function CardDescription({ children }: CardDescription) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};

type CardCta = { children: ReactNode };

Card.Cta = function CardCta({ children }: CardCta) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500"
    >
      {children}
      <Icons.chevronRight className="w-4 h-4 ml-1 stroke-current" />
    </div>
  );
};

type CardEyebrow = {
  as: ElementType;
  decorate: boolean;
  className: ClassValue;
  children: ReactNode;
};

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrow) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
