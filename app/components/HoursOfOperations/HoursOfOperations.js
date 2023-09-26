import React from 'react'

function HoursOfOperations() {
  return (
    <div className="flex flex-col w-full whitespace-nowrap gap-1">
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Monday</p><p>6AM - 12PM</p></span>
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Tuesday</p><p>6AM - 12PM</p></span>
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Wednesday</p><p>6AM - 12PM</p></span>
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Thursday</p><p>6AM - 12PM</p></span>
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Friday</p><p>6AM - 12PM</p></span>
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Saturday</p><p>6AM - 12PM</p></span>
        <span className="flex w-full justify-between text-[10px] text-gray-400"><p>Sunday</p><p>6AM - 12PM</p></span>

    </div>
  )
}

export default HoursOfOperations