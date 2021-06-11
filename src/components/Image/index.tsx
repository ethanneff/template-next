import Original from 'next/image';
import {ReactElement} from 'react';

type Props = {
  src: string;
  size: number;
  alt: string;
};

export const Image = ({src, size, alt}: Props): ReactElement => (
  <Original alt={alt} height={size} priority src={src} width={size} />
);
