import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { clamp } from '@lib/utils/common';

export const useUpdateHeader = () => {
  const isHomePage = usePathname() === '/';
  const isInitial = useRef<boolean>(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0;
    const upDelay = 64;

    const setProperty = (property: string, value: string | null) => {
      document.documentElement.style.setProperty(property, value);
    };

    const removeProperty = (property: string) => {
      document.documentElement.style.removeProperty(property);
    };

    const updateHeaderStyles = () => {
      const { top, height } = headerRef.current?.getBoundingClientRect() ?? {
        top: 0,
        height: 0,
      };

      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty('--header-position', 'sticky');
      }

      setProperty('--content-offset', `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`);
        setProperty('--header-mb', `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty('--header-height', `${offset}px`);
        setProperty('--header-mb', `${height - offset}px`);
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`);
        setProperty('--header-mb', `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed');
        removeProperty('--header-top');
        removeProperty('--avatar-top');
      } else {
        removeProperty('--header-inner-position');
        setProperty('--header-top', '0px');
        setProperty('--avatar-top', '0px');
      }
    };

    const updateAvatarStyles = () => {
      if (!isHomePage) {
        return;
      }

      const fromScale = 1;
      const toScale = 36 / 64;
      const fromX = 0;
      const toX = 2 / 16;

      const scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );

      const borderScale = 1 / (toScale / scale);
      const borderX = (-toX + x) * borderScale;
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty('--avatar-border-transform', borderTransform);
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0');
    };

    const updateStyles = () => {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    };

    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [isHomePage]);

  return { headerRef, avatarRef };
};
