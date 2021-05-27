import Head from 'next/head';
import {Layout, NavButtonLink} from '../components';

export default function Home() {
  return (
    <Layout home>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <section>
          <h1>Example Web Template</h1>
          <p>A simple app to showcase the architecture for frontend apps</p>
          <NavButtonLink title="View albums" href="/albums" />
        </section>
      </div>
    </Layout>
  );
}
