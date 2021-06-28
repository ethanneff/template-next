import {NavLink} from '../../components';
import utilStyles from '../../styles/utils.module.css';
import {UserIcon} from '../users/UserIcon';

type Props = {
  id: number;
  title: string;
  body: string;
  userId: number;
  hideNav?: boolean;
};

export const PostCard = ({
  id,
  title,
  body,
  userId,
  hideNav,
}: Props): JSX.Element => {
  return (
    <div className={utilStyles.card} key={id}>
      <div className={utilStyles.center}>
        <UserIcon id={userId} />
        <div>
          <h2 style={{textTransform: 'capitalize'}}>{title}</h2>
          <p>{body}</p>
          {!hideNav && (
            <NavLink href={`/posts/${id}`}>
              <span>🪧 Post Detail</span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
