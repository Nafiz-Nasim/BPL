import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from '../components/layout/Nav'
import AvailablePlayer from '../components/modules/AvailablePlayer';
import SelectedPlayers from '../components/modules/SelectedPlayers';
 import { ToastContainer, toast } from 'react-toastify';


const fetchplayers=async () => {
  const res=await fetch("/players.json");
  return res.json();
 
}
const players=fetchplayers();
function App() {
 
  const [available,setavailable]=useState(true);
 const [coin,setcoin]=useState(900000000);
 const [selectedplayers,setselectedplayers]=useState([]);

 const deleteplayers=(deleteinfo)=>{
console.log(deleteinfo);
const filterdata=selectedplayers.filter(allplayers=> allplayers.id!== deleteinfo.id)
setcoin(coin+deleteinfo.price)
setselectedplayers(filterdata)


 }

  return (
    <>
    <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto'>

<Nav coin={coin} />
      <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto  '>
     <div className=" bg-blue-600   h-90 rounded-4xl flex flex-col items-center justify-center">
      <img src="assets/banner-main.png" alt="" />
     <h3 className='text-white font-bold mt-2'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
     <p className='text-white font-bold'>Beyond Boundaries Beyond Limits</p>
     <button className="bg-amber-300 px-3 py-1 rounded-2xl mt-2 ">Warning</button>

      </div>



    </section>  

<div className="available flex items-center justify-between mt-10">
  <div className="text">
<h3>
  {available?"  Available Players":`Selected Player (${selectedplayers.length}/6)`}
  

  
  
  
  </h3> 
  </div>
  <div className="buttons    ">
    <button className={ ` ${available ?"bg-amber-300" : " " } px-8 py-2 rounded-l-2xl `} onClick={()=>{ setavailable(true)}}>Available</button>
    <button className={ ` ${available ?"" : " bg-amber-300" } px-8 py-2 rounded-r-2xl `} onClick={()=>{ setavailable(false)}}>Selected ({selectedplayers.length})</button>
  </div>


</div>
      


{ available?
<Suspense fallback={<p>........................................Loading Data.........................................................</p>} >
<AvailablePlayer  players={players} setcoin={setcoin} coin={coin} selectedplayers={selectedplayers} setselectedplayers={setselectedplayers} ></AvailablePlayer>
</Suspense>


: <SelectedPlayers deleteplayers={deleteplayers} selectedplayers={selectedplayers}></SelectedPlayers> 


}



    </section>
 
   <ToastContainer />
    </>
  )
}

export default App
