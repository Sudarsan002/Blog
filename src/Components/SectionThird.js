import React from "react";
import Link from "next/link";
import Author from "./Reuse/Author";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const SectionThird = () => {
  return (
    <section>
      <div style={styles.main}>
        <h2>Most Popular</h2>
      </div>
      <div style={styles.swiper}>
        <Swiper
          slidesPerView={2}
          modules={[Navigation]}
          navigation

        >
          <SwiperSlide>
            <Posts />
          </SwiperSlide>
          <SwiperSlide>
            <Posts />
          </SwiperSlide>
          <SwiperSlide>
            <Posts />
          </SwiperSlide>
          <SwiperSlide>
            <Posts />
          </SwiperSlide>
          <SwiperSlide>
            <Posts />
          </SwiperSlide>
          <SwiperSlide>
            <Posts />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export const Posts = () => {
  return (
    <div style={styles.postmain}>
      <div>
        <Link href={"/ "}>
          <a>
            {" "}
            <img
              src="https://i.ibb.co/746H34t/img2.jpg"
              alt="img1"
              border="0"
              height="300px"
              width="420px"
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
          Your most happy customers are greatest source of learning
        </div>
        <p style={styles.paragraph}>
          Even the all - powerful Pointing has no control about the blind texts
          it is an almost unorthographic life One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far
          World of Grammar.
        </p>
        <Author />
        Carousel,and arrow btn in slider
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
    width: "71%",
  },
  paragraph: {
    color: "#5 05050",
    textAlign: "justify",
    width: "71%",
  },
  business: {
    color: "orange",
    textDecoration: "none",
  },
  swiper: {
    padding: "73px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  postmain: {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-evenly",
    padding: "5%",
  },
};
