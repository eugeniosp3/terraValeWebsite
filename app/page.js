import NavBar from './components/NavBar/NavBar'
import HeroUnderNavBar from './components/HeroUnderNavBar/HeroUnderNavBar'
import Image from 'next/image'
import ThingsToDoCardHolder from './components/ThingsToDoCardHolder/ThingsToDoCardHolder'
import DiningAds from './components/DiningAds/DiningAds'
import { pageCopy } from '@/pageCopy'
import BreakfastAds from './components/DiningAds/BreakfastAds'
export default function Home() {
  return (
    <main className="">
      <NavBar />
      <div id="heroUnderNavBar" className="">
        <HeroUnderNavBar />
      </div>
      <div id="cardHolerContainer" className='mt-10'>
      <ThingsToDoCardHolder />
      </div>
      <Image
      src="/bannerImages/mountainCity.png"
      alt="A picture of a city on a mountain."
      width={1920} height={1080}
      className="mt-36 "
      />
      <div id="breakfastDinnerContainers" className="flex flex-col w-full">
      <BreakfastAds />
      <DiningAds />
      </div>
      <Image 
      src="/bannerImages/oceanCoast.png"
      alt="A picture of a hillside ridge along a beach. Maybe this is Cyprus."
      width={1920} height={1080}
      className="mt-4 mb-40"
      />
    </main>
  )
}
