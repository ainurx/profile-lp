import React from 'react'

const items = [ "What is the most fun thing to \nbecome a designer?", "How is your daily routine?"]

function Article() {
  return (
    <div className='w-full'>
        {
            items.map((item, index)=>(
                <div key={index} className='flex justify-end'>
                    <div className={`${index === 0 ? 'border-b-2 border-white pb-12': 'py-12'}`}>
                        <h2 className='text-2xl whitespace-pre font-semibold'>{item}</h2>
                        <p className='whitespace-pre'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed {'\n'}
                            do eiusmod tempor incididunt ut labore et dolore magna {'\n'}
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation {'\n'}
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. {'\n'} {'\n'}

                            Duis aute irure dolor in reprehenderit in voluptate velit esse {'\n'}
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint {'\n'}
                            occaecat cupidatat non proident, sunt in culpa qui officia {'\n'}
                            deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Article