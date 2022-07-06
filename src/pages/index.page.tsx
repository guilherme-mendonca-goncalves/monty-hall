import { Card, NumberInput } from '@src/components';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Home: NextPage = () => {
  const [numberOfDoors, setnumberOfDoors] = useState(3);
  let doorWithPresent = Math.floor(Math.random() * (numberOfDoors - 1 + 1)) + 1;
  console.log(doorWithPresent);

  return (
    <>
      <Head>
        <title>Monty Hall</title>
        <meta name="description" content="The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall." />
      </Head>

      <main>
        <div className='teste'>
          <Card bgcolor='#c0392c'><h1>Monty Hall</h1></Card>
          <Card>
            <NumberInput
              text='Quantidade de portas'
              value={numberOfDoors}
              onChange={newQuantity => setnumberOfDoors(newQuantity)}
            />
          </Card>
        </div>
        <div>
          <Card>
            <h3>Atrás de uma das portas existe um prêmio...{'\n'}Você consegue adivinhar?</h3>
          </Card>
          <Card bgcolor='#28a085'><Link href={`/game/${numberOfDoors}/${doorWithPresent}`} passHref><h2>Iniciar</h2></Link></Card>
        </div>
      </main>

      <footer>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
