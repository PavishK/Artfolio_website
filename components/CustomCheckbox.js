"use client";

import React from 'react'

function CustomCheckbox({ label, list, func }) {

  return (
    <div className='w-full flex flex-col gap-y-0.5'>
    <label className='text-lg font-medium'>{label}</label>
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:grid-rows-3'>
        { list.map((v,i) => (
            <div key={i} className='flex items-center justify-normal gap-x-2 p-0.5'>
                <input key={i} type='radio' name='options' value={v} id={i} className='scale-125 accent-wood' onChange={(e)=>func(e.target.value)}/>
                <span className='first-letter:capitalize text-sm'>{v}</span>
            </div>
        ))}
    </div>
    </div>
  )
}

export default CustomCheckbox