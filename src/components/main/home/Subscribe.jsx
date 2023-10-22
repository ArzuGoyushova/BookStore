import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe w-full my-20'>
        <div className=''>
        <h1 className='md:text-4xl lg:text-5xl sm:text-xl font-semibold'>
           Subscribe to our newsletter
          </h1>
        </div>
        <div className='flex justify-between items-center'>
        <div className='w-2/5'>
        <p>Enter your email address to receive regular updates, as well as new on upcoming events and specific offers.</p>
        </div>
        <div className='w-1/3'>
        <form>
      <div className="flex space-x-4">
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="border w-2/3 p-2"
          required
        />
        <button

          type="submit"
          className="flex-shrink-0 bg-orange-500 hover:bg-orange-700 text-sm text-white py-3 px-8"
        >
         Subscribe
        </button>
      </div>
    </form>
        </div>
        </div>
    </div>
  )
}

export default Subscribe
