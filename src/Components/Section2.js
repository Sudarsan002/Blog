
import Link from "next/link";
import React from "react";
import Author from "./Reuse/Author";

const Section2 = () => {


  const arr=[{
    url:'https://i.ibb.co/746H34t/img2.jpg',
    content:''
 },
{
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGDIaDZ60o2SJtyyH2GvifxZ0V7AnLgVcg6K0QAC3-IHUju4ApaNqYFqi4b_cDORTKg0&usqp=CAU',
    content:''
    // content:'Each flower grows strong and individual as it is meant to do.  Each flower has its own beauty that is valued on its own and as part of the overall glory of the garden.',
},
{
    url:'https://www.hortmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_380/MTY4OTExNDUwMDA0NzI3NzI0/2572g_1_.webp',
   content:''
    // content:'"I have decided to grow a garden of mini-head lettuce. If you wonder why Europeans like mini heads of lettuce, next time you are in your market, buy one of these small heads which we Americans usually pass over for poly bagged mixes (eew...washed in chlorine and tasteless) or for large overfertilized Iceberg heads, and find out why they are so preferred, the nutty taste and sweet flavor might convince you too.',
},
{
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzH2H6nvZEaT2gyRfA_9yOOyvPUGK7X_0ISFSinddUZGsERJ9YFVGDsm_dxgq45NkeFvI&usqp=CAU",
    content:''
    // content:'Our garden grows with each new production, one flower for each child who blossoms with all the benefits derived from theatre.'
}
]    

  return (
    <div>
      <div style={styles.Section2}>
        <h2>Latest Posts</h2>
      </div>
      {arr.map((item, index)=>{
            console.log(item)
            return(
                <Posts content={item.content} img={item.url}  />
            )
          })}
    </div>
  );
};


export const Posts = (props) => {
  const{content,img}=props
  return (
    <div
      style={styles.spacebtw}
    >
      <div>
        <Link href={"/ "}>
          <a>
            {" "}
            <img
              src={img}
              alt="img1"
              border="0"
              height="300px"
              width="400px"
            />
          </a>
        </Link>
        <div>
          <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link>
        </div>
        <div style={styles.text}>
         {content}
        </div>
        <p style={styles.paragraph}>
          
        </p>
        <Author />
      </div>
      <div>
        <Link href={"/ "}>
          <a>
            {" "}
            <img
              src="https://i.ibb.co/746H34t/img2.jpg"
              alt="img1"
              border="0"
              height="300px"
              width="400px"
            />
          </a>
        </Link>
        <div>
          <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
          </Link>
        </div>
        <div style={styles.text}>
          Your most happy customers are greatest source of learning
        </div>
        <p style={styles.paragraph}>
          
        </p>
       <Author />
      </div>
    
      <div>
        <Link href={"/ "}>
          <a>
            {" "}
            <img
              src="https://i.ibb.co/746H34t/img2.jpg"
              alt="img1"
              border="0"
              height="300px"
              width="400px"
            />
          </a>
        </Link>
        <div>
          <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
          </Link>
        </div>
        <div style={styles.text}>
          Your most happy customers are greatest source of learning
        </div>
        <p style={styles.paragraph}>
          
        </p>
        <Author />
      </div>
    </div>
  );
};

export default Section2;

const styles = {
  Section2: {
    display: "flex",
    justifyContent: "center",
  },
  paragraph: {
    color: "#5 05050",
    textAlign: "justify",
    width: "80%",
  },
  text: {
    // fontSize: "50px",
    color: "#525252",

    //
  },
  business: {
    color: "orange",
    textDecoration: "none",
  },
  spacebtw:{
    
      display: "flex",
      flexDirecton: "row",
      justifyContent: "space-evenly",
      padding: "5%",
    
  }
};
