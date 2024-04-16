import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactContent from '../components/ContactContent'

function Contact() {
  return (
    <>
 <div className="flex h-screen flex-col justify-center items-center">
    <ContactHeader />
    <ContactContent />
      </div>
    </>
  )
}

export default Contact