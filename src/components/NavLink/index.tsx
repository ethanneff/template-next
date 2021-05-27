import Link from 'next/link';
import {ReactElement} from 'react';

type Props = {
  href: string;
  children: ReactElement;
};

export const NavLink = ({href, children}: Props) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
