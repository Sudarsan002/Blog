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
      link:"/MostPopular/Endswithus",
      title:"It Ends With Us: A Novel: Volume 1",
      url: "https://i.ibb.co/sww5XgP/it-ends.jpg",
      author:"Colleen Hoover"
    },
    {
      link:"/MostPopular/Hobbit",
      title:"The Hobbit",
      url: "https://i.ibb.co/L0CMr8w/hobbit.jpg",
      author:"J. R. R. Tolkien"
    },
    {
      link:"/MostPopular/Charlotte",
      title:" Charlotte's Web",
      url: "https://i.ibb.co/K2zWKJ8/charles.jpg",
      author:"E.B. White"
    },
    {
      link:"/MostPopular/Startswithus",
      title:"It Starts With Us",
      url: "https://i.ibb.co/zZYjVZc/start.jpg",
      author:"Colleen Hoover"
    },
    {
      link:"/MostPopular/HiddenHindhu",
      title:"The Hidden Hindu",
      url: "https://i.ibb.co/tK4Fsc7/gindu.jpg",
      author:"Akshat Gupta"
    },
    {
      link:"/MostPopular/FireandBlood",
      title:"A Song of Ice and Fire : Fire and Blood ",
      url: "https://i.ibb.co/LnqzfG7/fire.jpg",
      author:"George R.R Martin"
    },
  ];
  return (
    <section>
      <div className="main2">
        <h2>Most Popular</h2>
      </div>
      <div className="swipper">
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
                    link={item.link}
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
  const { img ,title,author,link} = props;
  return (
    <div className="spacebtw">
      <div>
        <Link href={link}>
          <a>
            <img src={img} alt="img1" border="0" height="250px" width="" />
          </a>
        </Link>
        <div>
          <Link href={link}>
            <a className="business"><i>{title}</i></a>
          </Link>
        </div>
       <div className="text"> {author}</div>
      </div>
    </div>
  );
};

export default SectionThird;

