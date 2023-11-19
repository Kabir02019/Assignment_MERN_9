import React from 'react'
import InfoCards from '../InfoCards/InfoCards'
import {useState} from "react"
import { Row, Col } from 'react-bootstrap';

const Jobs = () => {
    const [arr,setArr]=useState([
        {title:"UI/UX developer",
        text:"Elevate user experiences by joining our team as a UI/UX Developer. In this role, you will blend design and technology to create visually appealing and user-friendly interfaces. Collaborate with cross-functional teams to understand user needs, wireframe designs, and implement intuitive navigation. Develop responsive web applications, ensuring a seamless and engaging user journey. Stay current with design trends, user interface best practices, and emerging technologies. Proficiency in design tools, a strong portfolio showcasing your work, and a passion for creating aesthetically pleasing interfaces are key. If you have a keen eye for detail, creativity, and a love for enhancing digital experiences, apply now to shape the future of our products!",
        color:"#fffecf"
     },
        
    {title:"Software Developer",
    text:"Embark on an exciting journey as a Software Developer and contribute to cutting-edge projects that shape the digital landscape. As a key team member, you'll design, code, test, and debug software applications. Collaborate with diverse teams to translate user needs into robust and scalable solutions. Demonstrate proficiency in programming languages, problem-solving skills, and a commitment to delivering high-quality code. Stay abreast of industry trends, adopting new technologies to enhance our software offerings. Strong communication and teamwork are crucial for success. If you're passionate about creating innovative software solutions and thrive in a dynamic environment, apply now to play a pivotal role in our development initiatives!",
    color:"#d4f8ff"
},
    
    {title:"Data Analyst",
    text:"Join our dynamic team as a Data Analyst and contribute to driving data-driven decision-making. You will collect, process, and analyze vast datasets, providing valuable insights to support business strategies. Responsibilities include designing and maintaining data systems, creating visualizations, and interpreting complex data sets. Collaborate with cross-functional teams to identify trends, patterns, and opportunities for optimization. Strong analytical and problem-solving skills, proficiency in data analysis tools, and a keen eye for detail are essential. If you thrive in a fast-paced environment, love transforming raw data into meaningful insights, and possess excellent communication skills, apply now to make an impact!",
    color:"#e6deff",},


    ]);

  return (<> 
    <div style={{padding:'3%',display: 'flex', flexDirection:'row',gap:'5%',justifyContent: 'space-around', marginTop: '20px',marginLeft:'auto',marginRight:'auto',width:'80%'}}>
       
   
        
        {arr.map(e=>{
        return(<InfoCards title={e.title} text={e.text} action="Apply Now" color={e.color}/>)
    })}
 
    </div>
    </>
  )
}

export default Jobs