import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

type ContainerOuterProps = HTMLAttributes<HTMLDivElement> & {};
export const ContainerOuter = forwardRef<HTMLDivElement, ContainerOuterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

ContainerOuter.displayName = 'ContainerOuter';

type ContainerInnerProps = HTMLAttributes<HTMLDivElement> & {};
export const ContainerInner = forwardRef<HTMLDivElement, ContainerInnerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="max-w-2xl mx-auto lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

ContainerInner.displayName = 'ContainerInner';

export const Container = forwardRef<HTMLDivElement, ContainerOuterProps>(
  ({ children, ...props }, ref) => {
    return (
      <ContainerOuter ref={ref} {...props}>
        <ContainerInner>{children}</ContainerInner>
      </ContainerOuter>
    );
  }
);

Container.displayName = 'Container';
