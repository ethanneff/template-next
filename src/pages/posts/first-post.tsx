import Head from 'next/head';
import {Layout} from '../../components';

export default function FirstPost() {
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
      </div>
    </Layout>
  );
}
