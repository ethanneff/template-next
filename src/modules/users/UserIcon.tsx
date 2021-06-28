import useSWR from 'swr';
import {NavLink} from '../../components';
import {Constants, fetchJson} from '../../utils';
import styles from './UserIcon.module.css';
import {isUser} from './utils';

type Props = {
  id: number;
  size?: number;
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('');

export const UserIcon = ({id, size = 40}: Props): JSX.Element => {
  const url = `${Constants.baseUrl}/users/${id}`;
  const {data, error} = useSWR(url, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isUser(data)) return <div>invalid data</div>;
  const initials = getInitials(data.name);

  return (
    <div className={styles.marginRight}>
      <NavLink href={`/users/${id}`}>
        <p
          className={styles.userIcon}
          style={{width: size, height: size, borderRadius: size}}>
          {initials}
        </p>
      </NavLink>
    </div>
  );
};
