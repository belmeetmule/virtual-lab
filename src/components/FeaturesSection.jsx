import React from 'react'
import {features} from '../constants/index'

const FeaturesSection = () => {
  return (
    <section className='mt-20 relative  min-h-[800px]'>
      <div className="text-center ">
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase '>
          features
        </span>
        <div className='border-b border-neutral-800'>

        </div>

        
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
          Easily build your 
          <span className="bg-gradient-to-r from-orange-500 to-orange-800
            text-transparent bg-clip-text">
              {" "}
            code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
            <div className='flex'>
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-left"> {feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500 text-left">
                  {feature.description}
                </p>
              </div>
            </div>
            </div>
          
        ))}

      </div>

    </section>

  )
}
export default FeaturesSection

