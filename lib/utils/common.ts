export const formatDate = (dateString: string) => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

export const clamp = (number: number, a: number, b: number) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  return Math.min(Math.max(number, min), max);
};

export function asyncComponent<T, R>(
  fn: (arg: T) => Promise<R>
): (arg: T) => R {
  return fn as (arg: T) => R;
}
