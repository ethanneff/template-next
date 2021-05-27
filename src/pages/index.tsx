import Head from 'next/head';
import {Layout, NavButtonLink} from '../components';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Example Web Template</h1>
      <p>A simple app to showcase the architecture for frontend apps</p>
      <NavButtonLink href="/albums">
        <p>View albums</p>
      </NavButtonLink>
    </Layout>
  );
}
