import React from 'react'
import { socials } from '../../../constants/constant'

const SocialMedia = () => {
  return (
    <div className='social-media w-full my-20'>
            <div className='flex items-center justify-between'>
                <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
                    Follow @SweetReads
                </h1>
                <a href="#" className='flex items-center'>
                    <span className='me-2 underline'>Follow us</span>
                </a>
            </div>
            <div className='flex  items-center'>
                <ul className="md:space-x-6 md:flex justify-between md:w-full mt-8 space-y-4 md:space-y-0">
                    {socials.map((social) => (
                        <li className='' key={social.id}>
                            <a>
                                <div className='relative'>
                                <img className="w-full" src={`./images/socialMedia/${social.imageUrl}`} />
                                </div>
                            
                            </a>
                        </li>
                    ))}
                </ul>


            </div>
        </div>
  )
}

export default SocialMedia
