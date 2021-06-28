import Link from 'next/link';

type Props = {
  href: string;
  children: JSX.Element;
};

export const NavLink = ({href, children}: Props): JSX.Element => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
