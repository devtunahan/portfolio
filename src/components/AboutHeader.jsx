import React from 'react'
import RustlingText from './RustlingText'

function AboutHeader() {
    return (
        <>
            <div className='pb-5'>
                <div className='flex flex-col justify-center items-center'>
                    <RustlingText text="Meet Tunahan" speed={5} styling="text-white font-bold text-xl md:text-2xl p-5" />
                </div>
            </div>
        </>
    )
}

export default AboutHeader