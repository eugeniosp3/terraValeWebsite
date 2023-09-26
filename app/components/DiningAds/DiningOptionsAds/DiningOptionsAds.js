import React from 'react'
import HoursOfOperations from '../../HoursOfOperations/HoursOfOperations'
import Image from 'next/image'



function DiningOptionsAds({
    decorIcon,
    restaurantName,
    restaurantDollars,
    restaurantAddress,
    restaurantWebsite,
    restaurantPhoneNumber,
    restaurantDescription
}) {
  return (
    <div className="w-full gap-4 flex mb-4">
        <div className="w-1/3 gap-4">
            <Image src={`/decorIcons/${decorIcon}`} alt="A picture of a baguette." width={80} height={40} />
        </div>
        <div>
        <div id="topText" className="flex flex-col w-4/5 gap-1 text-[#00598E]">
            <span className="flex w-4/5 items-center justify-between">
                <p className="text-xl font-semibold">{restaurantName}</p>
                <p className="">{restaurantDollars}</p>
            </span>
            <p className="text-xs">{restaurantAddress}</p>
            <span className="flex w-4/5 justify-between">
                <p className="text-xs">{restaurantWebsite}</p>
                <p className="text-xs font-semibold">{restaurantPhoneNumber}</p>
            </span>
            <div>
            <p className="text-xs text-slate-700">{restaurantDescription}
            </p>
        </div>
            
        </div>
        <div className="w-2/5 mt-2">
        <HoursOfOperations />
        </div>
        </div>
    </div>
  )
}

export default DiningOptionsAds