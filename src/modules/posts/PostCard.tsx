import {NavLink} from '../../components';
import utilStyles from '../../styles/utils.module.css';
import {UserIcon} from '../users/UserIcon';

type Props = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const PostCard = ({id, title, body, userId}: Props): JSX.Element => {
  return (
    <div className={utilStyles.card} key={id}>
      <div className={utilStyles.center}>
        <UserIcon id={userId} />
        <div>
          <h2 style={{textTransform: 'capitalize'}}>{title}</h2>
          <p>{body}</p>
          <NavLink href={`/posts/${id}`}>
            <span>🪧 Post {id}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
