import React from 'react'
import RustlingText from './RustlingText'

function Header() {
  return (
    <>
    <div className='text-white'>
        <div className="flex flex-col items-center justify-center h-full">
        <div className="flex">
        <RustlingText text="Hey, I'm" speed={10} styling="text-3xl md:text-5xl mr-3"/>
        <img src="https://avatars.githubusercontent.com/u/47463551?s=400&u=e85352d943ed91cbc9ddb312c01e5c92b64a6dd7&v=4" alt="Tunahan" className="rounded-full h-10 w-10"/>
        <RustlingText text="Tunahan." speed={10} styling="text-3xl md:text-5xl ml-3"/>
        </div>
        <RustlingText text="How can I help you?" speed={15} styling="text-3xl md:text-5xl"/>
        </div>
      </div>
    </>
)
}

export default Header