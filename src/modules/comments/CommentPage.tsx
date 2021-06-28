import Head from 'next/head';
import {useRouter} from 'next/router';
import {Layout} from '../../components';
import {CommentBody} from './CommentBody';

export const CommentPage = (): JSX.Element => {
  const router = useRouter();
  const {commentId} = router.query;

  return (
    <Layout>
      <Head>
        <title>Comment {commentId}</title>
      </Head>
      <h1>Comment {commentId}</h1>
      <CommentBody />
    </Layout>
  );
};
