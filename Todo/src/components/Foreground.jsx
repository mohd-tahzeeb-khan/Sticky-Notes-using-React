import React, { useRef, useState } from 'react'
import Card from './Card'
import { useReducedMotion } from 'framer-motion';

function Foreground() {
    const ref =useRef(null);
    const data=[
        // description, filesize, CloseorDownload, tagDetails
        {
            description:"Hey! Today you have to start with the New Project of React.",
            filesize:"1MBs",
            close:false,
            tag:{isOpen:false, tagtile:"Download Now", tagColor:"green"},
        },
        {
            description:"Meeting tonight with Client.",
            filesize:"3KBs",
            close:false,
            tag:{isOpen:false, tagtile:"Download Now", tagColor:"green"},
        },
    ];
  return (
    <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap '>
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground