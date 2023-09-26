import React from 'react'
import Image from 'next/image'
import { Lily_Script_One } from 'next/font/google'
import HeroForm from './HeroForm/HeroForm'

const lilyScriptOne = Lily_Script_One({ subsets: ['latin'], weight: '400' })

function HeroUnderNavBar() {
  return (
    <div id="mainDiv" className="select-none">
        <div className={`absolute ${lilyScriptOne.className} top-1/3 left-1/2 transform -translate-x-1/2 translate-y-3/4 whitespace-nowrap select-none`}>
        <span className="text-white text-4xl
        font-normal">Stay here once. Memories </span>
        <span className="text-white text-4xl font-normal font-['Lily Script One'] underline">forever</span>
        <span className="text-white text-4xl font-normal font-['Lily Script One']">.</span>
        </div>
        <span id="heroFormContainer" className=''>
            <HeroForm />

        </span>
        <Image src="/bannerImages/mountaview 1.png" alt="hero" width={1920} height={1080} />
        


    </div>
  )
}

export default HeroUnderNavBar