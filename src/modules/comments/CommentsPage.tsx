import Head from 'next/head';
import {ReactElement} from 'react';
import {Layout} from '../../components';
import {CommentsBody} from './CommentsBody';

export const CommentsPage = (): ReactElement => {
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
