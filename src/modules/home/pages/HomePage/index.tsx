import Head from 'next/head';
import {ReactElement} from 'react';
import {Layout, NavButtonLink} from '../../../../components';

export const HomePage = (): ReactElement => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>

    <h1>Example Web Template</h1>

    <p>A simple app to showcase the architecture for frontend apps</p>

    <NavButtonLink href="/users">
      <p>View albums</p>
    </NavButtonLink>
  </Layout>
);
