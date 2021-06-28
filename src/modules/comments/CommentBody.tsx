import {useRouter} from 'next/router';
import useSWR from 'swr';
import utilStyles from '../../styles/utils.module.css';
import {Constants, fetchJson} from '../../utils';
import {isComment} from './utils';

export const CommentBody = (): JSX.Element => {
  const router = useRouter();
  const {commentId} = router.query;
  const url = `${Constants.baseUrl}/comments/${commentId}`;
  const {data, error} = useSWR(url, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isComment(data)) return <div>invalid data</div>;

  const {id, postId, name, email, body} = data;
  return (
    <div className={utilStyles.card}>
      {id} {postId} {name} {email} {body}
    </div>
  );
};
