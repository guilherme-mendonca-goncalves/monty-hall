import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monty Hall</title>
        <meta name="description" content="The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall." />
      </Head>

      <main>
        <h1>Hello world!</h1>
      </main>

      <footer>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
