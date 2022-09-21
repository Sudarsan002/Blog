
import Link from "next/link";
import React from "react";
import Author from "./Reuse/Author";

const Section2 = () => {


  const arr=[{
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZ_Lk71gFMvSHX_LVccHbzgnO3VD2QzqUQw&usqp=CAU',
    content:''
 },
{
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOu7GGogbUXszVQ5yah8d-qiz8jB4TQciXQ&usqp=CAU',
    content:''
    // content:'Each flower grows strong and individual as it is meant to do.  Each flower has its own beauty that is valued on its own and as part of the overall glory of the garden.',
},
{
    url:'https://www.hortmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_380/MTY4OTExNDUwMDA0NzI3NzI0/2572g_1_.webp',
   content:''
    // content:'"I have decided to grow a garden of mini-head lettuce. If you wonder why Europeans like mini heads of lettuce, next time you are in your market, buy one of these small heads which we Americans usually pass over for poly bagged mixes (eew...washed in chlorine and tasteless) or for large overfertilized Iceberg heads, and find out why they are so preferred, the nutty taste and sweet flavor might convince you too.',
},

]    
const arr1=[{
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxC_K1NNXrdWv5jwVp5ILHpB_DoKbVucfimg&usqp=CAU',
  content:''
},
{
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFXNpryFLjNRz1B3rdFc7ixB63dPzPfNl7A&usqp=CAU',
  content:''
  // content:'Each flower grows strong and individual as it is meant to do.  Each flower has its own beauty that is valued on its own and as part of the overall glory of the garden.',
},
{
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWaRzUunfGIRh8cqADpxL52bW6VwZbKnuE42o9FYkHhZLZ5OQQ0gD1NoOawz-FqRTbj0&usqp=CAU',
 content:''
  // content:'"I have decided to grow a garden of mini-head lettuce. If you wonder why Europeans like mini heads of lettuce, next time you are in your market, buy one of these small heads which we Americans usually pass over for poly bagged mixes (eew...washed in chlorine and tasteless) or for large overfertilized Iceberg heads, and find out why they are so preferred, the nutty taste and sweet flavor might convince you too.',
},

]    

  return (
    <div >
      <div style={styles.Section2}>
        <h2>Latest Posts</h2>
      </div>
      <div style={styles.map}> 
      <div>    
       {arr1.map((item, index)=>{
            console.log(item)
            return(
                <Posts content={item.content} img={item.url}  />  
            )
          })}
          </div>
          <div>
          {arr.map((item, index)=>{
            console.log(item)
            return(
                <Posts content={item.content} img={item.url}  />
                
            )
          })}
          </div>
          </div>

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
              height="200px"
              width="300px"
            />
          </a>
        </Link>
        <div>
          <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
          </Link>
        </div>
        <div style={styles.text}>
         {content}
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
    
  },
  map:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:"20px",
    marginLeft:"5%"
  }
};
