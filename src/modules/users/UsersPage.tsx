import Head from 'next/head';
import {Layout} from '../../components';
import {UsersPageBody} from './UsersPageBody';

export const UsersPage = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <UsersPageBody />
    </Layout>
  );
};
