import { useState } from 'react'
function App() {
  const [color , setColor] = useState("olive")
  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
          <button className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>Magenta</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"navy"}} onClick={()=>setColor("navy")}>Navy</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
