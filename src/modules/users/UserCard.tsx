import {useMemo} from 'react';
import {NavLink} from '../../components';
import utilStyles from '../../styles/utils.module.css';
import {UserIcon} from './UserIcon';

type Props = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const UserCard = ({id, name, email, phone}: Props): JSX.Element => {
  const tele = useMemo(() => phone.split(' ')[0], [phone]);

  return (
    <div className={utilStyles.card} key={id}>
      <div className={utilStyles.center}>
        <UserIcon id={id} />
        <div>
          <div>
            <h4>{name}</h4>
            <a href={`mailto:${email}`}>{email}</a>
            <span>|</span>
            <a href={`tel:${tele}`}>{tele}</a>
          </div>
          <div className={utilStyles.flex}>
            <NavLink href={`/posts?userId=${id}`}>
              <span>🪧 Posts</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
