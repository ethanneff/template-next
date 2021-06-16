import Head from 'next/head';
import {ReactElement} from 'react';
import {Layout} from '../../components';
import {UsersBody} from './UsersBody';

export const UsersPage = (): ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <UsersBody />
    </Layout>
  );
};
