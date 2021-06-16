import {ReactElement} from 'react';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {UserCard} from './UserCard';
import {isUsers} from './utils';

export const UsersBody = (): ReactElement => {
  const {data, error} = useSWR(`${Constants.baseUrl}/users`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isUsers(data)) return <div>invalid data</div>;

  return (
    <div>
      {data.map(({id, email, name, phone}, index) => (
        <div key={id}>
          <UserCard email={email} id={id} name={name} phone={phone} />
          <div style={{padding: index === data.length - 1 ? 0 : 4}} />
        </div>
      ))}
    </div>
  );
};
