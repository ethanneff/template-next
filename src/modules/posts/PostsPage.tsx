import Head from 'next/head';
import {Layout} from '../../components';
import {PostsPageBody} from './PostsPageBody';

export const PostsPage = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <PostsPageBody />
    </Layout>
  );
};
