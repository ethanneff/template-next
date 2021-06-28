import Head from 'next/head';
import {useRouter} from 'next/router';
import {Layout} from '../../components';
import {PostPageBody} from './PostPageBody';

export const PostPage = (): JSX.Element => {
  const router = useRouter();
  const {postId} = router.query;

  return (
    <Layout>
      <Head>
        <title>Post {postId}</title>
      </Head>
      <PostPageBody />
    </Layout>
  );
};
