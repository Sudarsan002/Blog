import React from 'react'
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from './Reuse/NewsLetter';
const Footer = () => {
  return (
    <section style={{ backgroundColor:"#f6f6f6",
    padding:"10px",}}>
         <NewsLetter/>
      <div style={styles.main}>
     
        <div>
        <div>
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
          <p>
            Terms & Condition
          </p>
        </div>
      </div>
    </section>
  )
}
export default Footer
const styles={
  main:{
   
    display:"flex",
    textAlign:"center",
    justifyContent:"center",
    color:"#585858"

    
  }
}
