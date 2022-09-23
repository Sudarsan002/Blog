import React from 'react'
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <section className='footer'>
        
      <div className='footermain'>
     
        <div >
        <div style={{display:"flex",justifyContent:"center"}}>
        <a style={{ marginRight: "10px" }}>
          <ImFacebook2 />
        </a>

        <a>
          <ImTwitter />
        </a>

        <a
          style={{ marginLeft: "10px",}}
        >
          <ImYoutube />
        </a>
      </div>
          <p>Copyright ©2022 All rights reserved | This template is made by Sudarsan</p>
          <p style={{display:"flex",justifyContent:"center"}}>
            Terms & Condition
          </p>
        </div>
      </div>
    </section>
  )
}
export default Footer
