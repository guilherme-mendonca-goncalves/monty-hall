import { Door } from '@src/components';
import { createDoor, updateDoors } from '@src/functions/createDoor';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GamePage = () => {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors!;
    const havePresent = +router.query.havePresent!;
    setDoors(createDoor(doors, havePresent));
  }, [router.query]);

  const renderingDoor = () => {
    return doors.map(door => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}/>;
    });
  };

  return (
    <div className='gamePage'>
      <div className='doors'>
        {renderingDoor()}
      </div>
      <div className='button'>
        <Link href='/' passHref><button>Reiniciar o jogo.</button></Link>
      </div>
    </div>
  );
};

export default GamePage;
