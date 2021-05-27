import {useRouter} from 'next/router';
import {MouseEvent} from 'react';

type Props = {
  title: string;
  href: string;
};

export const NavButtonLink = ({href, title}: Props) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return <button onClick={handleClick}>{title}</button>;
};
