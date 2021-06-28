import {NavLink} from '../../components';
import utilStyles from '../../styles/utils.module.css';

type Props = {
  id: number;
  postId: string;
  name: string;
  email: string;
  body: string;
  hideLink?: boolean;
};

export const CommentCard = ({
  id,
  postId,
  name,
  email,
  body,
  hideLink,
}: Props): JSX.Element => {
  return (
    <div className={utilStyles.card} key={postId}>
      <h2 style={{textTransform: 'capitalize'}}>{name}</h2>
      <p>{body}</p>
      <a href={`mailto:${email}`}>{email}</a>
      {!hideLink && (
        <NavLink href={`/comments/${id}`}>
          <span>💬 Comment Details</span>
        </NavLink>
      )}
    </div>
  );
};
