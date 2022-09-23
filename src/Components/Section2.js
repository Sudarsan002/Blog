import Link from "next/link";
import React from "react";

const Section2 = () => {
  const arr2 = [
    {
      title: "You Can ",
      url: "https://i.ibb.co/Y8j51vW/you-can.jpg",
      author: "George Matthew Adams",
      link: "/LatestPosts/YouCan",
    },

    {
      link: "/LatestPosts/ChetanBhagat",
      title: "half girlfriend",
      // url: "https://cdn.shopify.com/s/files/1/0100/4001/6992/products/Half_Girlfriend_urdu_bazaar_15_800x.jpg?v=1654302548",
      author: "CHETAN BHAGAT",
      url:"https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg"
    },
    {
      link: "/LatestPosts/Story",
      title: "How to Tell a Story",
      url: "https://media.npr.org/assets/img/2022/04/26/the-moth_9780593139004-copy_custom-4a67aef1f7dc880e0bd2037e7addc96f11cc0469.jpg",
      author: "Catherine Burns",
    },
  ];

  const arr1 = [
    {
      link: "/LatestPosts/Elusive",
      title: "Elusive",
      url: "https://rukminim1.flixcart.com/image/416/416/kvba7bk0/book/b/o/e/elusive-original-imag89fqfn8hd6zh.jpeg?q=70",
      author: "Morgan Housel",
      date: "01 Sep 2020",
    },
    {
      link: "/LatestPosts/whowill",
      title: "Who Will Cry When You Die?",
      url: "https://i.ibb.co/Q9nFSJn/robin.jpg",
      date: "2003",
      author: "ROBIN SHARMA",
    },
    {
      link: "/LatestPosts/Love+work",
      title: "Love and Work",
      url: "https://i.ibb.co/KmvKJ66/LW.jpg",
      date: " 05 Apr 2022",
      author: "Marcus Buckingham",
    },
  ];

  return (
    <div>
      <div className="newsletterinput">
        <h2>Latest Posts</h2>
      </div>
      <div className="map">
        <div>
          {arr1.map((item, index) => {
            return (
              <Posts
                img={item.url}
                title={item.title}
                date={item.date}
                author={item.author}
                link={item.link}
              />
            );
          })}
        </div>

        <div>
          {arr2.map((item, index) => {
            {/* console.log(item); */}
            return (
              <Posts
                author={item.author}
                img={item.url}
                title={item.title}
                date={item.date}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Posts = (props) => {
  const { img, author, title, link } = props;
  console.log(title);
  return (
    <div className="spacebtw">
      <div>
        <Link href={link}>
          <a>
            <img src={img} alt="img1" border="0" height="300px" width="250px" />
          </a>
        </Link>
        <div>
          <div style={{ padding: "5px" }}>
            <Link href={link}>
              <a className="business">
                <i>{title}</i>
              </a>
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            By:
            <Link href={link}>
              <a className="author2">{author}</a>
            </Link>
          </div>
        </div>

        <div className="text2"></div>
        <p className="paragraph1"></p>
      </div>
    </div>
  );
};

export default Section2;

