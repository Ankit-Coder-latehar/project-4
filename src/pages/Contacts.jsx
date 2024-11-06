import React from 'react'
import ContactForm from '../components/Contact'
import Footer from '../components/Footer'
import ContactHeader from '../components/ContactHeader'

const Contacts = () => {
  return (
    <div>
      <ContactHeader/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contacts