import React, { use } from 'react'
import Player from './Player';

export default function AvailablePlayer({players,setcoin,coin}) {
  const playersdata=use(players);

  
  return (
    <>
<section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex  items-center justify-center flex-wrap gap-10 mt-10'>

{
  playersdata.map(player=> (<Player key={playersdata.id} player={player} setcoin={setcoin} coin={coin} ></Player> ))
}
</section>



  
    </>
  )
}
