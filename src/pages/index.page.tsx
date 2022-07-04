import { Door, Present } from '@src/components';
import DoorModel from '@src/model/DoorModel';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [door1, setDoor1] = useState(new DoorModel(1));

  return (
    <>
      <Head>
        <title>Monty Hall</title>
        <meta name="description" content="The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall." />
      </Head>

      <main>
        <Door value={door1} onChange={newDoor => setDoor1(newDoor)}/>
      </main>

      <footer>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
