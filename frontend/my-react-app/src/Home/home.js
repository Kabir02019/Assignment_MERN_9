import React from 'react'
import InfoCards from '../InfoCards/InfoCards'
import ImageHome from '../Image/home.png'

const Home = () => {
  return (<>
    
    <div style={{marginLeft:'20%',marginRight:'auto',marginTop:'5%',}}>
    <InfoCards image={ImageHome} button='none' width='50rem' title='Home' text='We value your feedback and inquiries. Whether you have questions about our products, services, or want to explore potential collaborations, our dedicated team is here to assist you. Feel free to reach out to us via the contact form below, and we will get back to you as soon as possible. Your satisfaction is our priority, and we appreciate the opportunity to connect with you. Thank you for considering us as your trusted partner. We look forward to hearing from you and fostering a lasting relationship.' />
  </div> 
  <br></br>
   </>
  )
}

export default Home