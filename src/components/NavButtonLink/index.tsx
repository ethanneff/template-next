import {useRouter} from 'next/router';
import {MouseEvent, useCallback} from 'react';

type Props = {
  children: JSX.Element;
  href: string;
};

export const NavButtonLink = ({href, children}: Props): JSX.Element => {
  const router = useRouter();

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      router.push(href);
    },
    [href, router],
  );

  return (
    <button onClick={handleClick} type="submit">
      {children}
    </button>
  );
};
