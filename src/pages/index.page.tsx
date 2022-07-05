import { Door, Present } from '@src/components';
import { createDoor, updateDoors } from '@src/functions/createDoor';
import DoorModel from '@src/model/DoorModel';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [doors, setDoors] = useState(createDoor(3,2));

  const renderingDoor = () => {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}/>;
    });
  };

  return (
    <>
      <Head>
        <title>Monty Hall</title>
        <meta name="description" content="The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall." />
      </Head>

      <main>
        {renderingDoor()}
      </main>

      <footer>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
