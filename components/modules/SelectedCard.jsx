import { Trash } from 'lucide-react';
import React from 'react'

export default function SelectedCard({purPlayers,deleteplayers}) {
    console.log(purPlayers);
    
  return (
    <>
      <section className=' shadow-2xl py-5 flex items-center justify-between w-full px-10'>
        <div className="name"><h2> {purPlayers.name}</h2> <p>{purPlayers.role}</p></div>
        <div className="delete"><button className='' onClick={()=>deleteplayers(purPlayers)}><Trash className=' text-red-700'/></button></div>

      </section>
    </>
  )
}
