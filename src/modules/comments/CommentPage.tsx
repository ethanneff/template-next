import Head from 'next/head';
import {useRouter} from 'next/router';
import {ReactElement} from 'react';
import {Layout} from '../../components';
import {CommentBody} from './CommentBody';

export const CommentPage = (): ReactElement => {
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
