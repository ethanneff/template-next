import Head from 'next/head';
import {ReactElement} from 'react';
import {Constants} from '../../utils';
import {Image} from '../Image';
import {NavButtonLink} from '../NavButtonLink';
import {NavLink} from '../NavLink';
import styles from './index.module.css';

const year = new Date().getFullYear();

type Props = {
  children: ReactElement | ReactElement[];
};

export const Layout = ({children}: Props) => {
  return (
    <div className={styles['container']}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            Constants.siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={Constants.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles['header']}>
        <nav className={styles['nav']}>
          <div className={styles['div']}>
            <NavLink href="/">
              <div className={styles.row}>
                <Image src="/images/profile.jpg" size={20} alt="logo" />
                <p>example</p>
              </div>
            </NavLink>
          </div>
          <ul className={styles.row}>
            <li className={styles.li}>
              <NavLink href="/">
                <p>link</p>
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink href="/">
                <p>link</p>
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavButtonLink href="/">
                <p>action</p>
              </NavButtonLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer className={styles['footer']}>
        <p>example {year}</p>
      </footer>
    </div>
  );
};
