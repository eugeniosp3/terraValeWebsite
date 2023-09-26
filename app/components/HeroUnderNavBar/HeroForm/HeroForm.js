"use client"
import React from 'react'
import { useState, useEffect } from 'react'

function HeroForm() {
    const [firstAndLast, setFirstAndLast] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [datesVisiting, setDatesVisiting] = useState("")
    const [enableSubmitButton, setEnableSubmitButton] = useState(false)
    // TODO: add specific checks for each section to make sure they fit a data structure format 
    // TODO: when click the form should disappear and a thank you message should appear
    
    // function checking input value, if the value is not longer than 10 characters
    // then set the state value to null and this does not pass the check
    function checkInputValue(value, setState) {
        if (value.length > 10) {
            setState(value)
        } else {
            setState(null)
        }
    }

    useEffect(() => {
        if (firstAndLast && email && phoneNumber && datesVisiting) {
            setEnableSubmitButton(true)
            console.log("all values are true")
        }
    }, [firstAndLast, email, phoneNumber, datesVisiting])

    // useEffect checking value of all 
  return (
    <div className="w-3/5 h-48 bg-sky-950 absolute top-1/2 left-1/3
    transform -translate-x-3/5 translate-y-1/5
    rounded-xl shadow-2xl shadow-black backdrop-blur-[2.5px] backdrop-filter bg-opacity-60
    flex flex-col
    ">
        <div className="flex items-center justify-start px-4 w-full h-1/5" id="row1">
            <p className="text-slate-200 text-md">Book a Reservation Consultation</p>
        </div>
        <div className="w-full h-1/3 flex items-center justify-start gap-8 px-4" id="row2">
        <input
        onChange={
            (e) => {
                checkInputValue(e.target.value, setFirstAndLast)
                setFirstAndLast(e.target.value)
            }

        }
        id="enterFirstLast" className="outline-none text-sm text-slate-100 bg-slate-100 bg-opacity-10 h-9 w-1/2 rounded-lg placeholder:text-xs py-1 px-4 tex" placeholder='First & Last Name'></input>
        <input
        onChange={
            (e) => {
                checkInputValue(e.target.value, setEmail)
                setEmail(e.target.value)
            }

        }
        id="enterEmail" className="outline-none text-sm text-slate-100 bg-slate-100 bg-opacity-10 h-9 w-1/2 rounded-lg placeholder:text-xs  px-4" placeholder='Email'></input>
        </div>
        <div className="w-full h-1/3 flex items-center justify-start gap-8 px-4" id="row3">
        <input
        onChange={
            (e) => {
                checkInputValue(e.target.value, setPhoneNumber)
                setPhoneNumber(e.target.value)
            }

        }
        id="enterFirstLast" className="outline-none text-sm text-slate-100 bg-slate-100 bg-opacity-10 h-9 w-1/2 rounded-lg placeholder:text-xs py-1 px-4 tex" placeholder='Phone Number'></input>
        <input
        onChange={
            (e) => {
                checkInputValue(e.target.value, setDatesVisiting)
                setDatesVisiting(e.target.value)
            }

        }
        id="enterEmail" className="outline-none text-sm text-slate-100 bg-slate-100 bg-opacity-10 h-9 w-1/2 rounded-lg placeholder:text-xs  px-4" placeholder='Dates Visiting'></input>
        </div>
        <div className="w-full h-1/4 flex items-center justify-end gap-8 px-4" id="submitRow">
            {enableSubmitButton ? <div id="submitButton" className=""><p className="text-sm text-slate-400 hover:text-slate-50 cursor-pointer ease-in-out duration-500 active:text-green-400">Submit</p></div> : null}
        </div>


    </div>
  )
}

export default HeroForm