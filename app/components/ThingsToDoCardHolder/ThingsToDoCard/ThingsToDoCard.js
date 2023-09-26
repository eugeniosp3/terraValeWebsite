import React from 'react'
import Image from 'next/image'
import { Lily_Script_One } from 'next/font/google'
const lilyScriptOne = Lily_Script_One({ subsets: ['latin'], weight: '400' })
const font = lilyScriptOne.className
function ThingsToDoCard({imageDir, title, description, titleBuddy, buttonText, buttonBGColor, buttonHoverColor}) {
    const disclaimerText = "+ Reservations operate on a first-come, first-serve basis. Failure to confirm at the time of booking with your consultant may result in the loss of your reservation."
  return (
    <div id="outerBox" className="w-[240px] h-[489px]">
        <Image src={`${imageDir}`} alt="photo of whatever...later" width={330} height={459} className=""/>
        {/* section under photo */}
        <div id="underPhoto"
         className="bg-white shadow-md shadow-black/10 rounded-2xl
            w-full h-56 flex flex-col justify-between
            p-2
        ">
            <div id="titleDollarsRow" className="flex justify-between items-center h-1/5">
                <p className={`${font} text-[#213540]`}>{title}</p>
                <p className=" text-xs text-slate-400/70">{titleBuddy}</p>
            </div>
            <div id="descriptionRow" className=" text-[11px] font-medium h-2/5">{description}</div>
            <div id="buttonRow" className="flex items-center justify-center h-1/4 w-full">
                <div id="buttonInCard"
                className={`${buttonBGColor} rounded-xl w-11/12 h-8
                flex items-center justify-center
                ${buttonHoverColor} ease-in-out transition-all duration-700 cursor-pointer
                active:bg-lime-500 shadow-sm shadow-black/30
                `}>
                    <p className="text-white text-sm">{buttonText}</p>
                </div>
                
            </div>
            <div id="disclaimerRow" className=" text-[7px] text-slate-400 h-1/5">{disclaimerText}</div>

        </div>
    </div>
  )
}

export default ThingsToDoCard