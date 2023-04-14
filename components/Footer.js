import React from 'react'

function Footer() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className=' space-y-4 text-xs text-gray-500'>
        <h5 className=' font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className=' space-y-4 text-xs text-gray-500'>
        <h5 className=' font-bold'>COMMUNITY</h5>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Help Center</p>
        <p>FAQs</p>
        <p>Twitter</p>
      </div>
      <div className=' space-y-4 text-xs text-gray-500'>
        <h5 className=' font-bold'>Terms of Use</h5>
        <p>Limitations of liability</p>
        <p>Termination policy</p>
        <p>Privacy policy</p>
        <p>Contact informations</p>
        <p>Governing law</p>
      </div>
      
      <div className=' space-y-4 text-xs text-gray-500'>
        <h5 className=' font-bold'>TRUST & SAFETY</h5>
        <p>Safety tips</p>
        <p>Airbnb&apos;s policy</p>
        <p>scams or fraudulent report</p>
        <p>Fraudulent report</p>
        <p>Fraudulent report avoid</p>
      </div>
    </div>
  )
}

export default Footer
