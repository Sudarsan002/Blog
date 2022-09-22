import React from "react";
import Author from "./Reuse/Author";
import Link from "next/link";

const SectionFour = () => {
  const arr = [
    {
      url: "https://i.ibb.co/6s7XvTt/ABC.jpg",
      content:
        "My First ABC Sticker Book: Exciting Sticker Book With 100 Stickers",
    },
    {
      url: "https://i.ibb.co/KVgrhQw/nursery.jpg",
      content:
        "A beautifully illustrated collection of traditional nursery rhymes including favourites like Twinkle Twinkle little star, Jack and Jill and Humpty Dumpty. Padded cover, stylish design and enchanting illustrations make this a perfect gift for your little one who has just started reading.",
    },
    {
      url: "https://i.ibb.co/XZwH5zd/story.jpg",
      content:
        "This story book with pictures is loaded with enticing illustrations and stories to steer the imagination of children. Target Publication through our colorful story book series aim to introduce kids to storytelling, new ideas and the world of creativity thereby to make learning a fun activity.",
    },
    {
      url: "https://i.ibb.co/gmS2f1s/space.jpg",
      content:
        "Memories of a grandparent spinning tales around animals and mysterious characters have kept many of us rapt till date. Sudha Murty's Grandmas Bag of Stories is simply delightful. The story starts with Anand, Krishna, Raghu and Meena arriving at their grandparents house in Shiggaon. Overjoyed Ajji and Ajja(Grandmother and grandfather in Kannada) get the house ready, while Ajji prepares delicious snacks for children.",
    },
  ];

  const arr1 = [
    {
      url: "https://i.ibb.co/bgjMmD5/planets.jpg",
      content:
        "My First ABC Sticker Book: Exciting Sticker Book With 100 Stickers",
    },
    {
      url: "https://i.ibb.co/dgQC8jx/period.jpg",
      content:
        "A beautifully illustrated collection of traditional nursery rhymes including favourites like Twinkle Twinkle little star, Jack and Jill and Humpty Dumpty. Padded cover, stylish design and enchanting illustrations make this a perfect gift for your little one who has just started reading.",
    },
    {
      url: "https://i.ibb.co/7rJ489s/space.jpg",
      content:
        "This story book with pictures is loaded with enticing illustrations and stories to steer the imagination of children. Target Publication through our colorful story book series aim to introduce kids to storytelling, new ideas and the world of creativity thereby to make learning a fun activity.",
    },
    {
      url: "https://i.ibb.co/6nwP12M/enc.jpg",

      content:
        "Our garden grows with each new production, one flower for each child who blossoms with all the benefits derived from theatre.",
    },
  ];
  return (
    <section>
      <div style={{ marginLeft: "64px" }}>
        {/* <h2>Children's</h2> */}
      </div>
      
      <div style={styles.map}>
        <div>
          {arr.map((item, index) => {
            console.log(item);
            return <Business content={item.content} img={item.url} />;
          })}
        </div>

        <div>
          <div style={{ marginTop: "-68px" }}>
            {/* <h2>Science, Nature & Technology</h2> */}
          </div>
          <div>
            {arr1.map((item, index) => {
              console.log(item);
              return <Business content={item.content} img={item.url} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Business = (props) => {
  const { content, img } = props;
  return (
    <div style={styles.main}>
      <div style={{padding:"15px"}}>
        <Link href={"/ "}>
          <a>
            <img src={img} alt="img1" border="0" height="200px" width="250px" />
          </a>
        </Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column",width:"50%" }}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default SectionFour;

const styles = {
  business: {
    color: "orange",
    textDecoration: "none",
    padding: "10px",
  },
  map: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "20px",
    marginLeft: "5%",
    fontSize: "16px",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
  },

};
