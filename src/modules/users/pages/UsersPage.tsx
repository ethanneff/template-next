import Head from 'next/head';
import useSWR from 'swr';
import {Layout} from '../../../components';
import {Constants, fetchJson} from '../../../utils';
import {UserSection} from '../components/UserSection';
import {isUsers} from '../utils';

export const UsersPage = () => {
  const {data, error} = useSWR(`${Constants.baseUrl}/users`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isUsers(data)) return <div>invalid data</div>;

  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>

      <h1>Users</h1>

      <div>
        {data.map(({id, email, name, phone}) => (
          <UserSection
            email={email}
            id={id}
            key={id}
            name={name}
            phone={phone}
          />
        ))}
      </div>
    </Layout>
  );
};
