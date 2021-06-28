import Head from 'next/head';
import {Constants} from '../../utils';
import {Image} from '../Image';
import {NavButtonLink} from '../NavButtonLink';
import {NavLink} from '../NavLink';
import styles from './Layout.module.css';

const getYear = new Date().getFullYear();

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({children}: Props): JSX.Element => {
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
                <Image alt="logo" circle size={40} src="/images/profile.webp" />
                <p className={styles.navTitle}>Example</p>
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
        <p>Example {getYear}</p>
      </footer>
    </div>
  );
};
