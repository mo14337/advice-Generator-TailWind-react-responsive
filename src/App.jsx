import { useEffect, useState } from 'react'
import axios from "axios"
import partition from "../src/assets/pattern-divider-desktop.svg"
import diceLogo from "../src/assets/icon-dice.svg"
import Loading from './components/loading'

function App() {
  const [advice, setAdvice] = useState([]);
  const [fetch, setFetch] = useState(false)
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)

    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
        setTimeout(()=>{
          setAdvice(res.data.slip);
          setLoading(false)
        },500)
      })
  }, [fetch])



  return (
    <section className=' relative flex  flex-col justify-center  items-center px-5 md:px-0 w-full h-screen bg-slate-900'>
    {loading && <Loading/>}
      <div className='relative w-full h-fit md:w-[500px] p-4  flex flex-col justify-center items-center gap-6 rounded-2xl bg-slate-700'>

        <p className=' text-green-600 font-semibold'>Advice #{advice.id}</p>
        <h1 className=' md:text-3xl text-2xl font-bold w-[300px] md:w-[450px] text-center text-white'> "{advice.advice}"</h1>
        <img  className=" mb-10" src={partition} alt='partition' />
        <button  onClick={()=> setFetch(!fetch)} className='  absolute -bottom-6 flex justify-center items-center bg-green-600 w-12 h-12 rounded-full'>
          <img className='' src={diceLogo} alt='diceLogo' />
        </button>
      </div>
    <footer className=' absolute bottom-5 text-white'>Made By Mohit</footer>
    </section>
  )
}

export default App
