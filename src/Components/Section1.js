import React, { useState } from "react";
import Link from "next/link";
import Author from "./Reuse/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore,{Autoplay} from 'swiper'

export default function Section1() {
    SwiperCore.use([Autoplay])
  return (
   
    <div>
      <section>
        <div style={styles.Trending}>
          <h1> Trending</h1>
        </div>
        <Swiper slidesPerView={1} autoplay={{delay:2000}}>
          <SwiperSlide>{Slide()} </SwiperSlide>
          <SwiperSlide>{Slide()} </SwiperSlide>
          <SwiperSlide>{Slide()} </SwiperSlide>
          <SwiperSlide>{Slide()} </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

function Slide() {
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
          {" "}
          <img src="https://i.ibb.co/746H34t/img2.jpg" alt="img1" border="0" />
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
              Your most happy customers are greatest source of learning
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
