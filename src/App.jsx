import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from '../components/layout/Nav'


function App() {
 

  return (
    <>
 
<Nav/>
      <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto  '>
     <div className=" bg-black bg-[url(assets/bg-shadow.png)]  h-90 rounded-4xl flex flex-col items-center justify-center">
      <img src="assets/banner-main.png" alt="" />
     <h3 className='text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
     <p className='text-white'>Beyond Boundaries Beyond Limits</p>
     <button className="btn btn-soft btn-warning">Warning</button>

      </div>



    </section>  
    
      
    </>
  )
}

export default App
