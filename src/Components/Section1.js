import React, { useState } from "react";
import Link from "next/link";
import Author from "./Reuse/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { NavItem } from "reactstrap";

const Section1=()=> {

  const arr=[{
    url:'https://i.ibb.co/746H34t/img2.jpg',
    content:''
    // content:'Your most happy customers are greatest source of learning',
},
{
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGDIaDZ60o2SJtyyH2GvifxZ0V7AnLgVcg6K0QAC3-IHUju4ApaNqYFqi4b_cDORTKg0&usqp=CAU',
    content:""
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
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <section>
        <div style={styles.Trending}>
          <h1> Trending</h1>
        </div>

        <Swiper slidesPerView={1} autoplay={{ delay: 2000 }}>
        
        {arr.map((item, index) => {
            console.log(item);
            return   <SwiperSlide>{<Slide content={item.content} img={item.url}    />} </SwiperSlide>;
          })}
        
          
        </Swiper>
      </section>
    </div>
  );
}

export const Slide=(props)=> {
  const{img,content}=props

  const [change, setChange] = useState({});

  const handleMouseEnter = (e) => {
    e.target.style.background = "#f6f6f6";
    setChange(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "white";
    setChange(false);
  };

  return (
    <div style={styles.img1}>
      <Link href={"/ "}>
        <a>
          <img src={img} alt="img1" border="0" />
        </a>
      </Link>
      <div style={{ marginLeft: "5%" }}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link>
          <Link href={"/"}>
            <a style={styles.date}>- July 14,2022</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link>
        </div>

        <div>
          <div style={styles.text}>
            <h2
              style={{
                fontFamily: "sans-serif",
                marginBottom: "7px",
                marginTop: "-7px  ",
              }}
            >
              {content}
            </h2>
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
    </div>
    
  );
}
export default Section1

// const Section1 = () => {
//   const [change, setChange] = useState({});

//   const handleMouseEnter = (e) => {
//     e.target.style.background = "#f6f6f6";
//     setChange(true);
//   };
//   const handleMouseLeave = (e) => {
//     e.target.style.background = "white";
//     setChange(false);
//   };

//   return (
//     <section>
//       <div style={styles.Trending}>
//         <h1> Trending</h1>
//       </div>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         ...
//       </Swiper>

//       <div style={styles.img1}>
//         <Link href={"/ "}>
//           <a>
//             {" "}
//             <img
//               src="https://i.ibb.co/746H34t/img2.jpg"
//               alt="img1"
//               border="0"
//             />
//           </a>
//         </Link>
//         <div style={{ marginLeft: "5%" }}>
//           <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//             <Link href={"/"}>
//               <a style={styles.business}>Business, Travel</a>
//               {/* <a style={styles.business}>Travel</a> */}
//             </Link>
//             <Link href={"/"}>
//               <a style={styles.date}>- July 14,2022</a>
//               {/* <a style={styles.business}>Travel</a> */}
//             </Link>
//           </div>

//           <div>
//             <div style={styles.text}>
//               <h1
//                 style={{
//                   fontFamily: "sans-serif",
//                   marginBottom: "7px",
//                   marginTop: "-7px  ",
//                 }}
//               >
//                 Your most happy customers are greatest source of learning
//               </h1>
//             </div>
//             <p style={styles.paragraph}>
//               Even the all - powerful Pointing has no control about the blind
//               texts it is an almost unorthographic life One day however a small
//               line of blind text by the name of Lorem Ipsum decided to leave for
//               the far World of Grammar.
//             </p>
//             <Author />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section1;

const styles = {
  Trending: {
    display: "flex",
    justifyContent: "center",
    fontSize:"25px"
  },
  img1: {
    padding: "5%",
    display: "flex",
    flexDirection: "row",
  },
  business: {
    // marginLeft: "50%",
    color: "orange",
    textDecoration: "none",
  },
  date: {
    color: "gray",
    textDecoration: "none",
  },
  text: {
    fontSize: "50px",
    color: "#525252",
    //
  },
  paragraph: {
    color: "#5 05050",
  },
};
