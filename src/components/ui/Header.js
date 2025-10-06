'use client'
import React from 'react'
import Image from 'next/image' 
import { Button } from './button'; // Assuming this is your custom Button component

function Header() {
  return (
    // Adjusted: Increased min-h-screen to make space, added 'mt-3' for top margin
    <div className='HeaderContainer flex items-center justify-center min-h-[90vh] bg-white p-4 '>  
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl'>
         
        <div className='text-content w-full md:w-1/2 p-4 space-y-6 text-center md:text-left'>
         
          <div className='title-line w-10 h-1 bg-black mx-auto md:mx-0'></div>

          <h1 className='text-6xl font-extrabold text-gray-900'>
            M&H STORE
          </h1>
         
          <p className='text-base text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0'>
            Dimension of reality that makes change possible and understandable. An 
            indefinite and homogeneous environment in which natural events and human 
            existence takes place.
          </p>
         
          <div className='buttons flex space-x-4 justify-center md:justify-start pt-2'>
            <Button className='bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-purple-700 shadow-lg'>
              GET STARTED
            </Button>
            <Button className='border-2 border-b-blue-500 text-blue-100 font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-blue-300 cursor-pointer hover:text-black'>
              READ MORE
            </Button>
          </div>

        </div>

        <div className='image-content w-full md:w-1/2 p-4 flex justify-center mt-10 md:mt-0'>
     
          <div className="relative w-full max-w-md h-[500px] group">
            <Image
              src='/ChatGPT_Image_Oct_4__2025__05_17_36_PM-removebg-preview.png'
              alt="cartier"
              layout="fill"
              objectFit="contain" 
              priority
              // Added transition and transform classes for subtle movement on hover
              className='transition duration-500 ease-in-out group-hover:scale-[1.03] group-hover:-translate-y-1 '
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;