import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Virtual build tools for {' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                developers
            </span>
            
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-full">
            Build your next project with Vite, the blazing fast build tool for modern web development.
        </p>

        <div className="flex justfy-center my-10">
            <a href="#"
            className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'
            >
                Start for free now

            </a>

            <a href="#"
            className='py-3 px-4 mx-3 border rounded-md hover:bg-orange-600'
            >
                Learn more
            </a>

        </div>
        <div className="flex mt-10 justify-center space-x-3">
            <video autoPlay loop muted className='w-1/2 border border-orange-700 rounded-lg'>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted  className='w-1/2 border border-orange-700 rounded-lg'>
                <source src={video2} type="video/mp4"/>
                your browser does not support the video tag.
            </video>
   
        </div>
    </section>
  )
}
