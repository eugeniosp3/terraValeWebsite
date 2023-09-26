import React from 'react'
import ThingsToDoCard from './ThingsToDoCard/ThingsToDoCard'

// imageDir, title, description, titleBuddy, buttonText

function ThingsToDoCardHolder() {
    const fineDiningDescription = "With over 24 dining venues, from cozy kitchens to Michelin-starred gems, indulge in unparalleled culinary luxury—if you can afford to stay, you can afford to savor."
    const scenicWalksDescription = "We offer 12 pristine, safe nature trails for your enjoyment. Immerse in serene beauty with peace of mind, thanks to our no-smoking policy and meticulous maintenance ensuring a harm-free environment."
    const relaxRecoversDescription = "We offer a variety of saunas and spas for optimal relaxation. Unwind and let our expert masseuses dissolve your tension, leaving you refreshed and revitalized."
    const chillNightsOutDescription = "Relax in our serene bars and lounges, enjoying specialty cocktails and soothing music, providing a perfect escape from stress. Return to your retreat with a sense of calm and renewed contentment."
  return (
    <div className='flex w-full justify-around select-none'>
        <ThingsToDoCard imageDir={"/bannerImages/fineDining.png"} title={"Fine Dining"} description={fineDiningDescription} titleBuddy={"$$$ - $$$$$"} buttonText={"Reservations"} buttonBGColor={"bg-[#DB3E00]"} buttonHoverColor={"hover:bg-[#FF5817]"}/>
        <ThingsToDoCard imageDir={"/bannerImages/scenicWalks.png"} title={"Scenic Walks"} description={scenicWalksDescription} titleBuddy={"12 Nature Trails"} buttonText={"Guided Tours"} buttonBGColor={"bg-[#9D9000]"} buttonHoverColor={"hover:bg-[#C9B900]"}/>
        <ThingsToDoCard imageDir={"/bannerImages/relaxStones.png"} title={"Relax. Recover."} description={relaxRecoversDescription} titleBuddy={"Saunas & Spas"} buttonText={"Spa Package Catalog"} buttonBGColor={"bg-[#1E2E3D]"} buttonHoverColor={"hover:bg-[#376B9D]"}/>
        <ThingsToDoCard imageDir={"/bannerImages/chillNightsOut.png"} title={"Chill Nights Out"} description={chillNightsOutDescription} titleBuddy={"Bars & Lounges"} buttonText={"Bar & Lounge Directory"} buttonBGColor={"bg-[#C36802]"} buttonHoverColor={"hover:bg-[#FF8D0D]"}/>


    </div>
  )
}

export default ThingsToDoCardHolder