import Link from 'next/link';
import {ReactElement} from 'react';

type Props = {
  href: string;
  children: ReactElement;
};

export const NavLink = ({href, children}: Props): ReactElement => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};