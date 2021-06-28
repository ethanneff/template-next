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

export const Layout = ({children}: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="Learn how to build a personal website using Next.js"
          name="description"
        />
        <meta
          content={`https://og-image.vercel.app/${encodeURI(
            Constants.siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          property="og:image"
        />
        <meta content={Constants.siteTitle} name="og:title" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.div}>
            <NavLink href="/">
              <div className={styles.row}>
                <Image alt="logo" size={40} src="/images/profile.webp" />
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
      <footer className={styles.footer}>
        <p>example {year}</p>
      </footer>
    </div>
  );
};
