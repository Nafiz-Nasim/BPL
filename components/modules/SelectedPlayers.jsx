import React from 'react'
import SelectedCard from './SelectedCard'

export default function SelectedPlayers({selectedplayers,deleteplayers}) {
  return (
    <>
      <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex  items-center justify-center flex-wrap gap-10 mt-10'>

{
  selectedplayers.map(purPlayers=><SelectedCard key={selectedplayers.id} deleteplayers={deleteplayers} purPlayers={purPlayers} ></SelectedCard> )
}


      </section>
    </>
  )
}
