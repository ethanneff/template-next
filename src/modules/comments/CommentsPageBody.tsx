import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {CommentCard} from './CommentCard';
import {isComments} from './utils';

export const CommentsPageBody = (): JSX.Element => {
  const router = useRouter();
  const {postId} = router.query;
  const path = postId ? `comments?postId=${postId}` : 'comments';
  const {data, error} = useSWR(`${Constants.baseUrl}/${path}`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isComments(data)) return <div>invalid data</div>;

  return (
    <div>
      <h1>Comments</h1>
      {data.map(({id, name, email, body, postId}, index) => (
        <div key={id}>
          <CommentCard
            body={body}
            email={email}
            id={id}
            name={name}
            postId={postId}
          />
          <div style={{padding: index === data.length - 1 ? 0 : 4}} />
        </div>
      ))}
    </div>
  );
};
