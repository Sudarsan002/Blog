import Link from "next/link";
import React from "react";

const Section2 = () => {
  const arr2 = [
    {
      title: "You Can ",
      url: "https://i.ibb.co/Y8j51vW/you-can.jpg",

      author: "George Matthew Adams",
      date: "",
    },

    {
      title: "half girlfriend",
      url: "https://cdn.shopify.com/s/files/1/0100/4001/6992/products/Half_Girlfriend_urdu_bazaar_15_800x.jpg?v=1654302548",
      date: "01 Oct 2014",
      author: "CHETAN BHAGAT",
    },
    {
      title: "How to Tell a Story",
      url: "https://media.npr.org/assets/img/2022/04/26/the-moth_9780593139004-copy_custom-4a67aef1f7dc880e0bd2037e7addc96f11cc0469.jpg",
      author: "Catherine Burns",
      date: "26 Apr 2022",
    },
  ];

  const arr1 = [
    {
      title: "Elusive",
      url: "https://rukminim1.flixcart.com/image/416/416/kvba7bk0/book/b/o/e/elusive-original-imag89fqfn8hd6zh.jpeg?q=70",
      author: "Morgan Housel",
      date: "01 Sep 2020",
    },
    {
      title: "Who Will Cry When You Die?",
      url: "https://i.ibb.co/Q9nFSJn/robin.jpg",
      date: "2003",
      author: "ROBIN SHARMA",
    },
    {
      title: "Love and Work",
      url: "https://i.ibb.co/KmvKJ66/LW.jpg",
      date: " 05 Apr 2022",
      author: "Marcus Buckingham",
    },
  ];

  return (
    <div>
      <div style={styles.Section2}>
        <h2>Latest Posts</h2>
      </div>
      <div style={styles.map}>
        <div>
          {arr1.map((item, index) => {
            return (
              <Posts
                img={item.url}
                title={item.title}
                date={item.date}
                author={item.author}
              />
            );
          })}
        </div>

        <div>
          {arr2.map((item, index) => {
            console.log(item);
            return (
              <Posts
                author={item.author}
                img={item.url}
                title={item.title}
                date={item.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Posts = (props) => {
  const { img, author, title } = props;
  console.log(title);
  return (
    <div style={styles.spacebtw}>
      <div>
        <Link href={"/ "}>
          <a>
            <img src={img} alt="img1" border="0" height="300px" width="250px" />
          </a>
        </Link>
        <div>
          <div style={{ padding: "5px"}}>
            <Link href={"/"}>
              <a style={styles.business}><i>{title}</i></a>
            </Link>
          </div>
          <div style={{display:"flex"}}>
          By:
         <Link href={'/'}><a style={styles.author}>{author}</a></Link>
        </div>
        </div>

        <div style={styles.text}></div>
        <p style={styles.paragraph}></p>
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
    color: "#525252",
  },
  business: {
    color: "orange",
    textDecoration: "none",
    fontSize:"20px",

    
  },
  spacebtw: {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  map: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "20px",
    marginLeft: "5%",
  },
  author:{
    color:"#007acc",
    textDecoration:"none"
  }
};
