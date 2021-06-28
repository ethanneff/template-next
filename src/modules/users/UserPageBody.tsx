import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {UserCard} from './UserCard';
import {isUser} from './utils';

export const UserPageBody = (): JSX.Element => {
  const router = useRouter();
  const {userId} = router.query;
  const url = `${Constants.baseUrl}/users/${userId}`;
  const {data, error} = useSWR(url, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isUser(data)) return <div>invalid data</div>;

  const {id, email, name, phone} = data;
  return <UserCard email={email} id={id} name={name} phone={phone} />;
};
