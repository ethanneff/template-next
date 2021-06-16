import {ReactElement, useMemo} from 'react';
import {NavLink} from '../../components';
import {UserIcon} from './UserIcon';

type Props = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const UserCard = ({id, name, email, phone}: Props): ReactElement => {
  const tele = useMemo(() => phone.split(' ')[0], [phone]);

  return (
    <div
      key={id}
      style={{
        display: 'flex',
        backgroundColor: '#f3f3f3',
        padding: 16,
        borderRadius: 16,
      }}>
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <UserIcon id={id} name={name} />
        <div style={{paddingLeft: 16}}>
          <div>
            <h4>{name}</h4>
            <a href={`mailto:${email}`}>{email}</a>
            <span>|</span>
            <a href={`tel:${tele}`}>{tele}</a>
          </div>
          <div style={{display: 'flex'}}>
            <NavLink href="/posts">
              <span>🪧 Posts</span>
            </NavLink>
            <span>|</span>
            <NavLink href="/comments">
              <span>💬 Comments</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
