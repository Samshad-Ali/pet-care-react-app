import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center absolute left-[50%] top-[50%] '>
        <div className='border-r-2 border-l-2   w-12 h-12 rounded-full animate-spin border-orange-500'>
        </div>
    </div>
  )
}

export default Loader