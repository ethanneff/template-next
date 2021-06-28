import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Constants, fetchJson} from '../../utils';
import {PostCard} from './PostCard';
import {isPosts} from './utils';

export const PostsPageBody = (): JSX.Element => {
  const router = useRouter();
  const {userId} = router.query;
  const path = userId ? `posts?userId=${userId}` : 'posts';
  const {data, error} = useSWR(`${Constants.baseUrl}/${path}`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isPosts(data)) return <div>invalid data</div>;

  return (
    <>
      <h1>Posts</h1>
      {data.map(({id, title, body, userId}, index) => (
        <div key={id}>
          <PostCard
            body={body}
            id={id}
            key={id}
            title={title}
            userId={userId}
          />
          <div style={{padding: index === data.length - 1 ? 0 : 4}} />
        </div>
      ))}
    </>
  );
};
