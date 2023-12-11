import React from 'react'
function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
          <div className='w-full py-10 flex justify-center text-zinc-900 font-semibold text-xl absolute top-[5%]'>Stick Your Notes</div>
          <h1  className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter text-red-200'>NOTES.</h1>
      </div>
    </>
    
  )
}

export default Background