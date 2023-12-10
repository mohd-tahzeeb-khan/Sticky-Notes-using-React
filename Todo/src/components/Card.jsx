import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative w-60 p-5 h-80 flex-shrink-0 bg-zinc-900 rounded-[20px] overflow-hidden'>
        <IoDocumentTextSharp size='1rem' color='#fff' />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
        <div className='absolute footer bottom-0  w-full h-10 left-0'>
            <div className='px-5 flex justify-between mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoIosCloseCircle />:<MdFileDownload size="1rem" color='#fff' />}
                    
                </span>
            </div>
            {data.tag.isOpen && (
                    <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                        <h3 className='text-xl font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card