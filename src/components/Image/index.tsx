import Original from 'next/image';

type Props = {
  src: string;
  size: number;
  alt: string;
};

export const Image = ({src, size, alt}: Props) => {
  return <Original priority src={src} height={size} width={size} alt={alt} />;
};
