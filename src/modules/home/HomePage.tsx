import Head from 'next/head';
import {ReactElement} from 'react';
import {Layout, NavButtonLink} from '../../components';

export const HomePage = (): ReactElement => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Example Web Template</h1>
    <p>A simple app to showcase the architecture for frontend apps</p>
    <div>
      <NavButtonLink href="/users">
        <p>Users</p>
      </NavButtonLink>
      <NavButtonLink href="/posts">
        <p>Posts</p>
      </NavButtonLink>
      <NavButtonLink href="/comments">
        <p>Comments</p>
      </NavButtonLink>
    </div>
  </Layout>
);
