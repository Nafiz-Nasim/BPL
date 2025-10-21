import React from 'react'

export default function Player({player,setcoin,coin}) {
    const btn_choose=()=>{
      const newcoin= coin - player.price
      console.log(newcoin);
      
        setcoin(newcoin);
    }
    console.log(player);
    
  return (
    <> <section className=' h-96 w-80 bg-blue-200 px-10 ' >
    
    <div className="text mt-10 ">

       
      <h2 className='text-2xl'>{player.name}</h2>
      <p>.....................................................................</p>
      <div className="con-type flex items-center justify-between mt-5"><h3>{player.nationality}</h3> <button>{player.role}</button></div>
      <h2 className='mt-3'>Rating : {player.rating}</h2>
      <h2 className='mt-3'>{player.role} : {player.batting_hand} Hand</h2>
      <h2 className='mt-3'>Price : ${player.price}</h2>
      <button className='px-5 py-2 bg-amber-400 rounded-2xl mt-2' onClick={btn_choose}>Choose Player</button>
    </div>
   </section></>
  )
}
