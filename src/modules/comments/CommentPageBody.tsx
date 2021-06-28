import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {CommentCard} from './CommentCard';
import {isComment} from './utils';

export const CommentPageBody = (): JSX.Element => {
  const router = useRouter();
  const {commentId} = router.query;
  const url = `${Constants.baseUrl}/comments/${commentId}`;
  const {data, error} = useSWR(url, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isComment(data)) return <div>invalid data</div>;

  const {id, name, email, body, postId} = data;
  return (
    <>
      <h1>Comment {commentId}</h1>
      <CommentCard
        body={body}
        email={email}
        hideLink
        id={id}
        name={name}
        postId={postId}
      />
    </>
  );
};
