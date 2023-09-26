import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className="w-full h-20 lg:bg-green-300 xl:bg-red-300 md:bg-[#213540] flex justify-around items-center select-none"
    >
        <div id="logoHolder" className="w-1/4">
            <Image src="/branding/logoFull.png" alt="logo" width={200} height={100} />

        </div>
        <div id="linksHolder" className="flex justify-evenly w-3/5">
                <Link href="/"><p className="text-slate-100 font-medium hover:text-orange-400 ease-in-out duration-500">Home</p></Link>
                <Link href="/"><p className="text-slate-100 font-medium hover:text-orange-400 ease-in-out duration-500">Dining</p></Link>
                <Link href="/"><p className="text-slate-100 font-medium hover:text-orange-400 ease-in-out duration-500">Entertainment</p></Link>
                <Link href="/"><p className="text-slate-100 font-medium hover:text-orange-400 ease-in-out duration-500">Lodging</p></Link>
                <Link href="/"><p className="text-slate-100 font-medium hover:text-orange-400 ease-in-out duration-500">FAQ</p></Link>
                <Link href="/"><p className="text-slate-100 font-medium hover:text-green-400 ease-in-out duration-500">Gov</p></Link>

        </div>

    </div>
  )
}

export default NavBar