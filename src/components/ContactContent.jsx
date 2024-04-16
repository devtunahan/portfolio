import {React, useEffect, useState} from 'react'

function ContactContent() {

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    <div className='text-white flex flex-col justify-center items-center pt-10 fade-in' style={{ opacity: fadeIn ? 1 : 0 }}>
        <img src="https://avatars.githubusercontent.com/u/47463551?s=400&u=e85352d943ed91cbc9ddb312c01e5c92b64a6dd7&v=4" alt="Tunahan" className="rounded-full h-20 w-20"/>
        <div className="text-2xl pt-4">Tunahan Karakaya</div>
        <div className="text-md text-gray-400">Software Developer</div>
       <div className='p-10'>
        <a href="mailto:me@tunahan.at" className='p-4 rounded-lg border border-gray-800 transition-opacity hover:opacity-50 mr-5'>via E-mail</a>
        <a href="https://cal.com/tunahan/15min" target="_blank" className='p-4 rounded-lg border border-gray-800 transition-opacity hover:opacity-60'>Book a call</a>
       </div>
       <div className='text-sm flex flex-row'>
        <a href="" className='mr-5 link hover:text-gray-400' target='_blank'>GitHub</a>
        <a href="" className='mr-5 link hover:text-gray-400' target='_blank'>LinkedIn</a>
        <a href="" className='link hover:text-gray-400'target='_blank'>Instagram</a>
       </div>
    </div>
    </>
)
}

export default ContactContent