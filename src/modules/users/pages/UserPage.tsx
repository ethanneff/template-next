import Head from 'next/head';
import {useRouter} from 'next/router';
import {ReactElement} from 'react';
import useSWR from 'swr';
import {Layout} from '../../../components';
import {Constants, fetchJson} from '../../../utils';
import {UserSection} from '../components/UserSection';
import {isUser} from '../utils';

export const UserPage = (): ReactElement => {
  const router = useRouter();
  const {userId} = router.query;
  const {data, error} = useSWR(
    `${Constants.baseUrl}/users/${userId}`,
    fetchJson,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isUser(data)) return <div>invalid data</div>;
  const {id, email, name, phone} = data;

  return (
    <Layout>
      <Head>
        <title>
          User
          {id}
        </title>
      </Head>

      <h1>
        User
        {id}
      </h1>

      <div>
        <UserSection email={email} id={id} name={name} phone={phone} />
      </div>
    </Layout>
  );
};
