import React from 'react'
import DiningOptionsAds from './DiningOptionsAds/DiningOptionsAds'
import Image from 'next/image'
import { pageCopy } from '@/pageCopy'
import { Lily_Script_One } from 'next/font/google'
const lilyScriptOne = Lily_Script_One({ subsets: ['latin'], weight: '400' })
const font = lilyScriptOne.className



function DiningAds({

}) {
  return (
    <div id="textDirectoryItems" className="w-full flex py-10 px-2 gap-4">
        <div id="leftSide" className="flex flex-col w-3/5 gap-2">
        <div id="topText" className="flex flex-col gap-2">
        <p
            className={`${lilyScriptOne.className} whitespace-nowrap select-none
            text-3xl
            `}
            >Start your day like a local...</p>
            <p className="text-sm leading-6">Settle into the embrace of our charming mountain town, 
                where each hidden gem offers a taste of the past. 
                Here, the allure of timeless culinary artistry and breathtaking 
                landscapes meld seamlessly, inviting you to indulge in the 
                tranquility and savor the flavors of breakfast spots unspoiled 
                by time. From the sunlit elegance of Maison du Soleil to the vibrant 
                zest of Bamboo Bistro, every moment is a step into a more serene, 
                flavorful world. Welcome to a place where every bite is a journey, 
                and every meal is a cherished memory in the making.</p>
                </div>
        <div className="gap-2">
        <DiningOptionsAds 
        decorIcon={"baguette.png"}
        restaurantName={pageCopy[0].breakfastPlaceA}
        restaurantDollars={pageCopy[0].breakfastPlaceADollars}
        restaurantAddress={pageCopy[0].breakfastPlaceAAddress}
        restaurantWebsite={pageCopy[0].breakfastPlaceAWebsite}
        restaurantPhoneNumber={pageCopy[0].breakfastPlaceAPhoneNumber}
        restaurantDescription={pageCopy[0].breakfastPlaceADescription}
        />
        <DiningOptionsAds 
        decorIcon={"ramen.png"}
        restaurantName={pageCopy[0].breakfastPlaceB}
        restaurantDollars={pageCopy[0].breakfastPlaceBDollars}
        restaurantAddress={pageCopy[0].breakfastPlaceBAddress}
        restaurantWebsite={pageCopy[0].breakfastPlaceBWebsite}
        restaurantPhoneNumber={pageCopy[0].breakfastPlaceBPhoneNumber}
        restaurantDescription={pageCopy[0].breakfastPlaceBDescription}
        />
        </div>
        </div>
        <Image 
        src="/bannerImages/breakfastSpots.png" 
        alt="A picture of a nice breakfast with different plates, 
        croissants and a nice latte." 
        width={650} height={1050} 
        className="w-1/2 p-4"/>
    </div>
  )
}

export default DiningAds