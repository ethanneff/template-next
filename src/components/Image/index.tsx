import Original from 'next/image';
import styles from './Image.module.css';

type Props = {
  src: string;
  size: number;
  alt: string;
  circle?: boolean;
};

export const Image = ({src, size, alt, circle}: Props): JSX.Element => (
  <Original
    alt={alt}
    /* eslint-disable react/forbid-component-props */
    className={circle ? styles.circle : undefined}
    height={size}
    priority
    src={src}
    width={size}
  />
);
