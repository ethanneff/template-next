import Head from 'next/head';
import {useRouter} from 'next/router';
import {ReactElement} from 'react';
import useSWR from 'swr';
import {Layout} from '../../../components';
import {Constants, fetchJson} from '../../../utils';
import {PostSection} from '../components/PostSection';
import {isPost} from '../utils';

export const PostPage = (): ReactElement => {
  const router = useRouter();
  const {postId} = router.query;
  const {data, error} = useSWR(
    `${Constants.baseUrl}/posts/${postId}`,
    fetchJson,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!isPost(data)) return <div>invalid data</div>;
  const {id, title, body} = data;

  return (
    <Layout>
      <Head>
        <title>
          Post
          {postId}
        </title>
      </Head>

      <h1>
        Post
        {postId}
      </h1>

      <div>
        <PostSection body={body} id={id} title={title} />
      </div>
    </Layout>
  );
};
