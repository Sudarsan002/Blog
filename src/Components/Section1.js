import React, { useState } from "react";
import Link from "next/link";
import Author from "./Reuse/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";



const Section1 = () => {
  
  const arr = [
    {
      link:"/Posts/Page",
      title: "DO EPIC SHIT",
      url: "https://i.ibb.co/QCLy1TL/do-epic-shit.png",
      content:
        "Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts on success and failure, money and investing, self-awareness and personal relationships have made him one of Indias top personal brands. In his first book, Ankur puts together the key ideas that have fuelled his journey - one that began with him wanting to be a space engineer and ended with him creating content that has been seen and read by millions. His thoughts range from the importance of creating habits for long-term success to the foundations of money management, from embracing and accepting failure to the real truth about learning empathy. ",
      author: "Ankur Warikoo",
      Date: "27 Dec 2021",
  
    },
    {
      link:"/Posts/1",
      title: "Harry Potter and the Philosopher's Stone",
      url: "https://i.ibb.co/SX75yJQ/harry-potter.jpg",
      content:
        "Joanne Rowling is an English writer. She achieved cult-status with seven Harry Potter books, The Tales of Beedle The Bard, Fantastic Beasts and Where To Find Them and Quidditch Through The Ages. She has also written two murder mystery novels under the pseudonym of Robert Galbraith.Jo completed her B.A. in French and Classics at the University of Exeter. She was awarded the title of Officer of the Most Excellent Order of the British Empire for her contributions to charity and literature.",
      author: "J. K. Rowling",
      Date: "01 Sep 2014",

     
    },
    {
      link:"/Posts/2",
      title: "REMINDERS OF HIM",
      url: "https://i.ibb.co/J5XqCr7/rom.jpg",
      content:
        "Colleen Hoover is an American author of young adult fiction and romance novels. She is best known for her 2016 romance novel It Ends with Us. Many of her works were self-published before being picked up by a publishing house.A troubled young mother yearns for a shot at redemption in this heartbreaking yet hopeful story from #1 New York Times bestselling author Colleen Hoover.",
      author: "colleen hoover",
      Date: "08 Mar 2022",
      
    },
    {
      link:"/Posts/3",
      title: "RICH DAD POOR DAD",
      url: "https://i.ibb.co/2qq59WR/rdpd.jpg",
      content:
        "It's been nearly 25 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena.It has since become the #1 Personal Finance book of all time... translated into dozens of languages and sold around the world.",
      author: "Robert T. Kiyosaki",
      Date: "Robert T. Kiyosaki",
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <section>
      
        <div style={styles.Trending}>
          <h1> Trending</h1>
        </div>
        
        <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} >
          {arr.map((item, index) => {
            
            return (
              <SwiperSlide>
                {
                  <Slide
                    title={item.title}
                    content={item.content}
                    img={item.url}
                    author={item.author}
                    date={item.Date}
                    link={item.link}
                  />
                }
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export const Slide = (props) => {
  const { img, content, author, date, title ,link} = props;

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
    <div>
      <div style={styles.img1}>
        <Link href={link}>
          <a>
            <img src={img} alt="img1" border="0" />
          </a>
          {/* <Image src={img} alt="Picture of the author" width={500} height={500} /> */}
        </Link>

        <div style={{ marginLeft: "5%" }}>
          <Link href={"/"}>
            <a style={styles.title}>{title}</a>
          </Link>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href={"/"}>
              <a style={styles.business}>By-{author}</a>
              {/* <a style={styles.business}>Travel</a> */}
            </Link>
            <div style={{ padding: "5px" }}>
              Released:
              <Link href={"/"}>
                <a style={styles.date}> {date}</a>
                {/* <a style={styles.business}>Travel</a> */}
              </Link>
            </div>
          </div>

          <div style={styles.auhtor}>
            About author:
            <div style={styles.text}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;

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
    fontSize: "25px",
  },
  img1: {
    padding: "5%",
    display: "flex",
    flexDirection: "row",
    marginLeft:"20%"
  },
  business: {
    color: "orange",
    textDecoration: "none",
    padding: "5px",
  },
  date: {
    color: "gray",
    textDecoration: "none",
  },
  text: {
    color: "#525252",
    textAlign: "justify",
    padding: "5px",
    width: "70%",
  },
  paragraph: {
    color: "#5 05050",
    padding: "5px",
  },
  title: {
    fontSize: "20px",
    color: "orange",
    padding: "5px",
    textDecoration: "none",
  },
  auhtor: {
    color: "#585858",
    padding: "5px",
  },
};
