import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {PostCard} from './PostCard';
import {isPost} from './utils';

export const PostPageBody = (): JSX.Element => {
  const router = useRouter();
  const {postId} = router.query;
  const url = `${Constants.baseUrl}/posts/${postId}`;
  const {data, error} = useSWR(url, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isPost(data)) return <div>invalid data</div>;

  const {id, title, body, userId} = data;
  return (
    <>
      <h1>Post {postId}</h1>
      <PostCard body={body} id={id} title={title} userId={userId} />
    </>
  );
};
