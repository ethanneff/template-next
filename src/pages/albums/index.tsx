import Head from 'next/head';
import useSWR from 'swr';
import {Layout} from '../../components';
import {Constants, fetchJson} from '../../utils';
import {isUsers} from './utils';

export default function Albums() {
  const {data, error} = useSWR(`${Constants.baseUrl}/users`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const payload = data.data;
  if (!isUsers(payload)) return <div>invalid data</div>;
  return (
    <Layout>
      <Head>
        <title>Albums</title>
      </Head>
      {payload.map(({id, email, first_name, last_name, avatar}) => (
        <div key={id}>
          {id} {email} {first_name} {last_name}
          <img src={avatar} alt={first_name} />
        </div>
      ))}
    </Layout>
  );
}
