import Head from 'next/head';
import {Layout} from '../../components';
import {CommentsBody} from './CommentsBody';

export const CommentsPage = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Comments</title>
      </Head>
      <h1>Comments</h1>
      <CommentsBody />
    </Layout>
  );
};
