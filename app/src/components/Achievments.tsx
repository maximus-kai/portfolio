'use client'
import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

const AchievementList = [
    {
        metric:'Projects',
        value: '100',
        prefix: '',
        postfix: '+'
    },
    {
        metric:'Users',
        value: '1',
         prefix: '',
        postfix: 'M+'
    },
    {
        metric:'Awards',
        value: '10',
         prefix: '',
        postfix: '+'
    },
    {
        metric:'Years',
        value: '5',
         prefix: '',
        postfix: '+'
    }
]
const Achievments = () => {
    return (
        <div className='py-8  xl:gap-16 sm:py-16 xl:px-16'>
                 <div className='border border-[#33353f] rounded-md py-8 px-17 flex flex-row items-center justify-between'>
                {
                    AchievementList.map((eachMetric, index) => (
                        <div className=' flex flex-col mx-4 items-center justify-center' key={index}>
                            <h2 className='text-white text-2xl font-bold flex flex-row'>
                            {eachMetric.prefix}
                            <AnimatedNumbers 
                                className=''
                                fontStyle={{
                                    fontSize: 40,
                                    fontWeight: 'bold',
                                    
                                    color: "white",
                                    }}
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                               duration: index + 0.3,
                                                    })}                                                                                                                         
                           animateToNumber={Number(eachMetric.value)}
                            /> 
                            {eachMetric.postfix}
                        </h2>
                        <p className='text-[#adb7be] text-base'>{ eachMetric.metric}</p>
                    </div>
                                    ))
            }
                </div> 
      </div>
  )
}

export default Achievments