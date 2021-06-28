import Head from 'next/head';
import {useRouter} from 'next/router';
import {Layout} from '../../components';
import {CommentPageBody} from './CommentPageBody';

export const CommentPage = (): JSX.Element => {
  const router = useRouter();
  const {commentId} = router.query;

  return (
    <Layout>
      <Head>
        <title>Comment {commentId}</title>
      </Head>
      <CommentPageBody />
    </Layout>
  );
};
