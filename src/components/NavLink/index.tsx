import Link from 'next/link';

type Props = {
  href: string;
  title: string;
};

export const NavLink = ({href, title}: Props) => {
  return (
    <Link href={href}>
      <a>{title}</a>
    </Link>
  );
};
