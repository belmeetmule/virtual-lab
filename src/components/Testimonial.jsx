import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <section className='mt-20 tracking-wide'>
        <h2 className="text-3xl sm:text-5xl lg:text-6x; text-center my-10 lg:my-20">
            What 
            {" "}
            <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text'>
            people
            {" "}
            </span>
             
            are saying
        </h2>

        <div className="flex flex-wrap justify-center">
            {
                testimonials.map((testimonial, index) =>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 mr-6 rounded-full border border-neutral-300' />
                                <div>
                                    <h6> {testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </section>
  )
}

export default Testimonial