import React from 'react'
import Image from 'next/image'

import HeroImage from '../../../public/svg/Group 61.svg'
import User from '../../../public/png/User.png'

function Hero() {
  return (
    <div className='w-full'>
        <div className='flex w-full justify-between py-4 border-b-2 border-t-2 border-white'>
            <div>
                <p>DESIGNER INTERVIEW</p>
                <p className='text-white/50'>AUGUST CHAPTER</p>
            </div>
            <div className='flex'>
                <div className='px-8'>
                    <p>WRITER</p>
                    <p className='text-white/50'>DWINAWAN</p>
                </div>
                <div className='pl-8 border-l-2 border-white'>
                    <p>DATE</p>
                    <p className='text-white/50'>AUGUST 11, 2021</p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <Image src={HeroImage} alt="Hero" className='mt-8'/>
            <Image src={User} alt="User" width={305} className='absolute border-8 border-black rounded-full top-52 -right-14'/>
        </div>
    </div>
  )
}

export default Hero