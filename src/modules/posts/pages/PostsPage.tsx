import Head from 'next/head';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import {Layout, NavLink} from '../../../components';
import {Constants, fetchJson} from '../../../utils';
import {PostSection} from '../components/PostSection';
import {isPosts} from '../utils';

export const PostsPage = () => {
  const router = useRouter();
  const {userId} = router.query;
  const path = userId ? `posts?userId=${userId}` : 'posts';
  const {data, error} = useSWR(`${Constants.baseUrl}/${path}`, fetchJson);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isPosts(data)) return <div>invalid data</div>;

  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>

      <h1>Posts</h1>

      <div>
        {data.map(({id, title, body}) => (
          <div key={id}>
            <PostSection body={body} id={id} title={title} />

            <NavLink href={`/posts/${id}`}>
              <p>Post</p>
            </NavLink>
          </div>
        ))}
      </div>
    </Layout>
  );
};
