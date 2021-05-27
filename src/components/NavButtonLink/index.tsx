import {useRouter} from 'next/router';
import {MouseEvent, ReactElement} from 'react';

type Props = {
  children: ReactElement;
  href: string;
};

export const NavButtonLink = ({href, children}: Props) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return <button onClick={handleClick}>{children}</button>;
};
