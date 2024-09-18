import React, { forwardRef } from 'react'

const Input = forwardRef(({ label, textarea, ...props },ref) => {
    return (
        <div className='flex flex-col gap-1 my-4"'>
            <div>
                <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            </div>
            <div>
                {textarea ? (
                    <textarea ref={ref} className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' {...props} />
                ) : (
                    <input ref={ref} className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' {...props} />
                )
                }
            </div>
        </div>
    )
}) 

export default Input