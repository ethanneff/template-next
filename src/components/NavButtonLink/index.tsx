import {useRouter} from 'next/router';
import {MouseEvent, ReactElement, useCallback} from 'react';

type Props = {
  children: ReactElement;
  href: string;
};

export const NavButtonLink = ({href, children}: Props): ReactElement => {
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
