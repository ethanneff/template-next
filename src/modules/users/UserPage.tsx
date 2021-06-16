import Head from 'next/head';
import {useRouter} from 'next/router';
import {ReactElement} from 'react';
import {Layout} from '../../components';
import {UserBody} from './UserBody';

export const UserPage = (): ReactElement => {
  const router = useRouter();
  const {userId} = router.query;

  return (
    <Layout>
      <Head>
        <title>User {userId}</title>
      </Head>
      <h1>User {userId}</h1>
      <UserBody />
    </Layout>
  );
};
