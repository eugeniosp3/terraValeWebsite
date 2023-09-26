import React from 'react'
import DiningOptionsAds from './DiningOptionsAds/DiningOptionsAds'
import Image from 'next/image'
import { pageCopy } from '@/pageCopy'
import { Lily_Script_One } from 'next/font/google'
const lilyScriptOne = Lily_Script_One({ subsets: ['latin'], weight: '400' })
const font = lilyScriptOne.className



function BreakfastAds({

}) {
  return (
    <div id="textDirectoryItems" className="w-full flex py-10 px-2 gap-4">
        <Image 
        src="/bannerImages/dinnerSpots.png" 
        alt="A picture of a nice breakfast with different plates, 
        croissants and a nice latte." 
        width={650} height={1050} 
        className="w-1/2 p-4"/>
        <div id="leftSide" className="flex flex-col w-3/5 gap-2">
        <div id="topText" className="flex flex-col gap-2">
        <p
            className={`${lilyScriptOne.className} whitespace-nowrap select-none
            text-3xl
            `}
            >Dinner for All</p>
            <p className="text-sm leading-6">As the sun sets, our mountain town reveals culinary gems
             like Saffron Grill and Aubergine Oasis, where flavors dance in harmonious blend. 
             Here, each dish is a journey, a harmonious blend of tradition and innovation, 
             inviting you to savor the tranquility and exquisite craftsmanship of our culinary 
             sanctuaries. Welcome to a serene escape where every meal is a cherished moment in 
             timeless gastronomy.</p>
                </div>
        <div className="gap-2">
        <DiningOptionsAds 
        decorIcon={"steak.png"}
        restaurantName={pageCopy[0].dinnerPlaceA}
        restaurantDollars={pageCopy[0].dinnerPlaceADollars}
        restaurantAddress={pageCopy[0].dinnerPlaceAAddress}
        restaurantWebsite={pageCopy[0].dinnerPlaceAWebsite}
        restaurantPhoneNumber={pageCopy[0].dinnerPlaceAPhoneNumber}
        restaurantDescription={pageCopy[0].dinnerPlaceADescription}
        />
        <DiningOptionsAds 
        decorIcon={"kebab.png"}
        restaurantName={pageCopy[0].dinnerPlaceB}
        restaurantDollars={pageCopy[0].dinnerPlaceBDollars}
        restaurantAddress={pageCopy[0].dinnerPlaceBAddress}
        restaurantWebsite={pageCopy[0].dinnerPlaceBWebsite}
        restaurantPhoneNumber={pageCopy[0].dinnerPlaceBPhoneNumber}
        restaurantDescription={pageCopy[0].dinnerPlaceBDescription}
        />
        </div>
        </div>
        
    </div>
  )
}

export default BreakfastAds