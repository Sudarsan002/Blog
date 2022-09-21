import React from "react";
import Link from "next/link";
import Author from "./Reuse/Author";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionThird = () => {
  const arr = [
    {
      title:"It Ends With Us: A Novel: Volume 1",
      url: "https://i.ibb.co/sww5XgP/it-ends.jpg",
      author:"Colleen Hoover"
    },
    {
      title:"The Hobbit",
      url: "https://i.ibb.co/L0CMr8w/hobbit.jpg",
      author:"J. R. R. Tolkien"
    },
    {
      title:" Charlotte's Web",
      url: "https://i.ibb.co/K2zWKJ8/charles.jpg",
      author:"E.B. White"
    },
    {
      title:"It Starts With Us",
      url: "https://i.ibb.co/zZYjVZc/start.jpg",
      author:"Colleen Hoover"
    },
    {
      title:"The Hidden Hindu",
      url: "https://i.ibb.co/tK4Fsc7/gindu.jpg",
      author:"Akshat Gupta"
    },
    {
      title:"A Song of Ice and Fire : Fire and Blood ",
      url: "https://i.ibb.co/LnqzfG7/fire.jpg",
      author:"George R.R Martin"
    },
  ];
  return (
    <section>
      <div style={styles.main}>
        <h2>Most Popular</h2>
      </div>
      <div style={styles.swiper}>
        <Swiper slidesPerView={3} modules={[Navigation]} navigation>
          {arr.map((item, index) => {
            console.log(item);
            return (
              <SwiperSlide>
                {
                  <Posts
                    title={item.title}
                    img={item.url}
                    author={item.author}
                    
                  />
                }
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export const Posts = (props) => {
  const { img ,title,author} = props;
  return (
    <div style={styles.postmain}>
      <div>
        <Link href={"/ "}>
          <a>
            <img src={img} alt="img1" border="0" height="250px" width="" />
          </a>
        </Link>
        <div>
          <Link href={"/"}>
            <a style={styles.business}><i>{title}</i></a>
          </Link>
        </div>
       <div style={styles.author}> {author}</div>
      </div>
    </div>
  );
};

export default SectionThird;

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontSize: "20px",
    color: "#525252",
    textAlign: "justify",
    width: "88%",
  },

  business: {
    color: "orange",
    textDecoration: "none",
  },
  swiper: {
    padding: "70px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  postmain: {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  paragraph: {
    color: "#5 05050",
    textAlign: "justify",
    width: "88%",
  },
  author:{
    color:"	#696969",
    // width:"10%"
  }
};
