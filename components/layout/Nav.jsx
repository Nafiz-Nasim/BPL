import { CirclePoundSterling } from 'lucide-react'
import React from 'react'

export default function Nav() {
  return (
    <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex justify-between items-center my-5 '>
     <div className="left">
        <img src="assets/logo.png" alt="" />
     </div>
     <div className="right flex items-center gap-6 ">

        <a href="">Home</a>
        <a href="">Fixture</a>
        <a href="">Teams</a>
        <a href="">Schedules</a>
        <button className='flex gap-1'><span>0</span>
            coin <CirclePoundSterling className='text-yellow-400'/> </button>
     </div>

    </section>
  )
}
