import React from 'react'
import {CheckCircle} from 'lucide-react';
import codeImage from '../assets/code.jpg';
import { checklistItems } from '../constants';

const Workflow = () => {
  return (
    <div className="">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6
        tracking-wide">
            Accelerate your 
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                {" "}
                coding workflow
            </span>
            
        </h2>

        <div className="flex flex-wrap justify-center">
            <div className='p-2 w-full lg:w-1/2'>
                <img src={codeImage} alt="Code"  />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
                
                <div key={index} className="flex mb-12">
                    <div className="flex items-center justify-center h-10 w-10 p-2 text-green-400 rounded-full">
                        <CheckCircle />
                    </div>
                    <div className='text-left'>
                        <h5 className="text-xl mt-1 ">{item.title}</h5>
                        <p className="text-neutral-500 text-md">{item.description}</p>
                    </div>
                </div>
            ))
            }

            </div>
        </div>
    </div>
  )
}

export default Workflow