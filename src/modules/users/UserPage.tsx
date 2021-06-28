import Head from 'next/head';
import {useRouter} from 'next/router';
import {Layout} from '../../components';
import {UserPageBody} from './UserPageBody';

export const UserPage = (): JSX.Element => {
  const router = useRouter();
  const {userId} = router.query;

  return (
    <Layout>
      <Head>
        <title>User {userId}</title>
      </Head>
      <h1>User {userId}</h1>
      <UserPageBody />
    </Layout>
  );
};
