import Head from 'next/head';
import useSWR from 'swr';
import {Layout} from '../../components';
import {Constants, fetchJson} from '../../utils';

type User = {
  id: number;
  email: number;
  first_name: string;
  last_name: string;
  avatar: string;
};
type Users = User[];

const isUsers = (data: any): data is Users => {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof (data[0] as User).id === 'number' &&
    typeof (data[0] as User).email === 'string' &&
    typeof (data[0] as User).first_name === 'string' &&
    typeof (data[0] as User).last_name === 'string' &&
    typeof (data[0] as User).avatar === 'string'
  );
};

export default function Albums() {
  const {data, error} = useSWR(`${Constants.baseUrl}/users`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const payload = data.data;
  if (!isUsers(payload)) return <div>invalid data</div>;
  return (
    <Layout>
      <div>
        <Head>
          <title>Albums</title>
        </Head>
        {payload.map(({id, email, first_name, last_name, avatar}) => (
          <div key={id}>
            {id} {email} {first_name} {last_name}
            <img src={avatar} alt={first_name} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
