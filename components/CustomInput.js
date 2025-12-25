"use client";

import React from 'react'

function CustomInput({ type="text", value, name, placeholder="", func, label }) {
  return (
    <div className='w-full flex flex-col gap-y-0.5'>
    <label className='text-lg font-medium'>{label}</label>
        <input 
        type={type} 
        name={name} 
        value={value} 
        placeholder={placeholder} 
        onChange={func}
        className='focus:outline-0 px-0.5 focus:bg-blush'
        />
        <div className='border-b-2 w-full'/>
    </div>
  )
}

export default CustomInput