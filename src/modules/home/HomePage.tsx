import Head from 'next/head';
import {Layout, NavButtonLink} from '../../components';
import styles from './HomePage.module.css';

export const HomePage = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Example Web Template</h1>
    <p>A simple app to showcase the architecture for frontend apps</p>
    <div style={{paddingTop: '1rem'}}>
      <NavButtonLink href="/users">
        <p>Users</p>
      </NavButtonLink>
      <span className={styles.spacer} />
      <NavButtonLink href="/posts">
        <p>Posts</p>
      </NavButtonLink>
      <span className={styles.spacer} />
      <NavButtonLink href="/comments">
        <p>Comments</p>
      </NavButtonLink>
    </div>
  </Layout>
);
