import React from 'react'
import image from '../assets/image.png'

const Card = () => {
  return (
        <div className='flex justify-center items-center min-h-screen bg-gray-900'>
            <div className='p-1 rounded-xl inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600'>
                <div className='card w-100 max-w-sm bg-gray-800 shadow-md rounded-xl p-4'>
                    <img src={image} style={{ width: '100%', height: 'auto' }} className='card-image rounded-lg object-cover mb-4' alt="" />
                    <h1 className='text-2xl text-white font-bold mb-2'>Card Component</h1>
                    <p className='text-gray-600 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate temporibus illo odio dolores error voluptates iste aliquid exercitationem quam quasi</p>
                    <button className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-101 active:scale-99 transition-transform duration-300 text-white px-4 py-2 rounded-lg' >Click Me</button>
                </div>
            </div>
        </div>
    )   
}

export default Card;
