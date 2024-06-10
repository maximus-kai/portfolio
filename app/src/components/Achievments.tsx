import React from 'react'

const AchievementList = [
    {
        metric:'Projects',
        value:'100+'
    },
    {
        metric:'Users',
        value:'1M+'
    },
    {
        metric:'Awards',
        value:'10+'
    },
    {
        metric:'Years',
        value:'5+'
    }
]
const Achievments = () => {
    return (
        <div className='py-8  xl:gap-16 sm:py-16 xl:px-16'>
                 <div className='border border-[#33353f] rounded-md py-8 px-17 flex flex-row items-center justify-between'>
            {
                AchievementList.map((eachMetric, index) => (
                    <div className=' flex flex-col mx-4 items-center justify-center' key={index}>
                        <h2 className='text-white text-4xl font-bold'>
                            {eachMetric.value}
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