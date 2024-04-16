import React from 'react'
import RustlingText from './RustlingText'

function ContactHeader() {
  return (
    <>
     <div className='text-gray-300'>
        <div className='flex flex-col justify-center items-center'>
            <RustlingText text="Ready to work together?" speed={5} styling="text-white font-bold text-xl md:text-2xl p-5" />
        </div>
    </div>
    </>
)
}

export default ContactHeader