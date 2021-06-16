import {ReactElement, useMemo} from 'react';
import {NavLink} from '../../components';

type Props = {
  id: number;
  name: string;
  size?: number;
};

export const UserIcon = ({id, name, size = 40}: Props): ReactElement => {
  const initials = useMemo(
    () =>
      name
        .split(' ')
        .map((word) => word[0])
        .join(''),
    [name],
  );

  return (
    <div>
      <NavLink href={`/users/${id}`}>
        <p
          style={{
            padding: 8,
            display: 'flex',
            backgroundColor: 'white',
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: size,
          }}>
          {initials}
        </p>
      </NavLink>
    </div>
  );
};
