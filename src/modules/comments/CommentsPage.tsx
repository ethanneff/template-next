import Head from 'next/head';
import {Layout} from '../../components';
import {CommentsPageBody} from './CommentsPageBody';

export const CommentsPage = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Comments</title>
      </Head>
      <CommentsPageBody />
    </Layout>
  );
};
