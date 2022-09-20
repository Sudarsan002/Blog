// import React from 'react'

// export default function Section2() {
//   return (
//     <div>
//        <section>
//         <h2>Latest Posts</h2>
//        </section>

//     </div>
//   )
// }
import Link from "next/link";
import React from "react";
import Author from "./Reuse/Author";

const Section2 = () => {
  return (
    <div>
      <div style={styles.Section2}>
        <h2>Section-2</h2>
      </div>
      <Posts/>
      <Posts/>
    </div>
  );
};
 

export const Posts = () => {
  return (
    <div style={{display:"flex",flexDirecton:"row",justifyContent:"space-evenly",padding:"5%"}}>
      <div>
      <Link href={"/ "}>
        <a>
          {" "}
          <img src="https://i.ibb.co/hYqFbPP/img4.jpg" alt="img1" border="0"  height='300px' width='400px'/>
        </a>
      </Link>
      <div>
      <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link></div>
      <div style={styles.text}>
            
              Your most happy customers are greatest source of learning
          
          </div>
          <p style={styles.paragraph}>
            Even the all - powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a small
            line of blind text by the name of Lorem Ipsum decided to leave for
            the far World of Grammar.
          </p>
          <Author />
      </div>
      <div>
      <Link href={"/ "}>
        <a>
          {" "}
          <img src="https://i.ibb.co/NYm6dZx/img3.jpg" alt="img1" border="0"  height='300px' width='400px'/>
        </a>
      </Link><div>
      <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link></div>
      <div style={styles.text}>
           
              Your most happy customers are greatest source of learning
           
          </div>
          <p style={styles.paragraph}>
            Even the all - powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a small
            line of blind text by the name of Lorem Ipsum decided to leave for
            the far World of Grammar.
          </p>
         <div > <Author/></div>
      </div>
      <div>
      <Link href={"/ "}>
        <a>
          {" "}
          <img src="https://i.ibb.co/746H34t/img2.jpg" alt="img1" border="0"  height='300px' width='400px'/>
        </a>
      </Link>
      <div>
      <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link></div>
      <div style={styles.text}>
           
              Your most happy customers are greatest source of learning
            
          </div>
          <p style={styles.paragraph}>
            Even the all - powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a small
            line of blind text by the name of Lorem Ipsum decided to leave for
            the far World of Grammar.
          </p>
          <Author />
      </div>
    </div>
  )
}

export default Section2;

const styles = {
  Section2: {
    display: "flex",
    justifyContent: "center",
  },
  paragraph: {
    color: "#5 05050",
    textAlign: 'justify',
    width:"80%"
   
  },
  text: {
    fontSize: "50px",
    color: "#525252",
    //
  },
  business: {
    color: "orange",
    textDecoration: "none",
  },
  img1: {
    padding: "5%",
    display: "flex",
    flexDirection: "row",
  },
};
