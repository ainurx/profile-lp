import React from 'react'

import Image from 'next/image'

import Squared from '../../../public/png/Group 68.png'
import Ttd from '../../../public/svg/ttd.svg'

const items = [
    {
        title: 'Food',
        tool: 'Pizza, Burger', 
    },
    {
        title: 'Tools',
        tool: 'Figma', 
    },
    {
        title: 'Work Type',
        tool: 'Night Owl', 
    },
    {
        title: 'Sport',
        tool: 'Football', 
    },
]

function Card() {
  return (
    <div className='p-[32px] border-2 border-white'>
        <h3 className='text-3xl whitespace-pre border-b-6 pb-2 border-white'>Designer by day, {'\n'}Graffiti artist by night</h3>
        {
            items.map((item, index) => (
                <div key={index} className='flex my-4 border-b-2 border-white pb-4 justify-between'>
                    <h4 className='text-[16px] font-semibold'>{item.title}</h4>
                    <h4 className='text-[16px] font-semibold'>{item.tool}</h4>
                </div>
            ))
        }
        <div className='flex justify-between mt-[30px]'>
            <Image src={Squared} alt="pallet"/>
            <Image src={Ttd} className='-mr-[72px]' alt="ttd"/>
        </div>
    </div>
  )
}

export default Card