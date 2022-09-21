import React from "react";
import Author from "./Reuse/Author";
import Link from "next/link";

const SectionFour = () => {
  const arr = [
    {
      url: "https://i.ibb.co/746H34t/img2.jpg",
      //  content:''
      content: "Your most happy customers are greatest source of learning",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGDIaDZ60o2SJtyyH2GvifxZ0V7AnLgVcg6K0QAC3-IHUju4ApaNqYFqi4b_cDORTKg0&usqp=CAU",
      content: "",
      // content:'Each flower grows strong and individual as it is meant to do.  Each flower has its own beauty that is valued on its own and as part of the overall glory of the garden.',
    },
    {
      url: "https://www.hortmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_380/MTY4OTExNDUwMDA0NzI3NzI0/2572g_1_.webp",
      content: "",
      // content:'"I have decided to grow a garden of mini-head lettuce. If you wonder why Europeans like mini heads of lettuce, next time you are in your market, buy one of these small heads which we Americans usually pass over for poly bagged mixes (eew...washed in chlorine and tasteless) or for large overfertilized Iceberg heads, and find out why they are so preferred, the nutty taste and sweet flavor might convince you too.',
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzH2H6nvZEaT2gyRfA_9yOOyvPUGK7X_0ISFSinddUZGsERJ9YFVGDsm_dxgq45NkeFvI&usqp=CAU",
      // content:''
      content:
        "Our garden grows with each new production, one flower for each child who blossoms with all the benefits derived from theatre.",
    },
  ];

  const arr1 = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxC_K1NNXrdWv5jwVp5ILHpB_DoKbVucfimg&usqp=CAU",
      content: "",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFXNpryFLjNRz1B3rdFc7ixB63dPzPfNl7A&usqp=CAU",
      content: "",
      // content:'Each flower grows strong and individual as it is meant to do.  Each flower has its own beauty that is valued on its own and as part of the overall glory of the garden.',
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWaRzUunfGIRh8cqADpxL52bW6VwZbKnuE42o9FYkHhZLZ5OQQ0gD1NoOawz-FqRTbj0&usqp=CAU",
      content: "",
      // content:'"I have decided to grow a garden of mini-head lettuce. If you wonder why Europeans like mini heads of lettuce, next time you are in your market, buy one of these small heads which we Americans usually pass over for poly bagged mixes (eew...washed in chlorine and tasteless) or for large overfertilized Iceberg heads, and find out why they are so preferred, the nutty taste and sweet flavor might convince you too.',
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzH2H6nvZEaT2gyRfA_9yOOyvPUGK7X_0ISFSinddUZGsERJ9YFVGDsm_dxgq45NkeFvI&usqp=CAU",
      // content:''
      content:
        "Our garden grows with each new production, one flower for each child who blossoms with all the benefits derived from theatre.",
    },
  ];
  return (
    <section>
      <div style={{ marginLeft: "64px" }}>
        <h2>Business</h2>
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
            <h2>Travel</h2>
          </div>

          {arr1.map((item, index) => {
            console.log(item);
            return <Business content={item.content} img={item.url} />;
          })}
        </div>
      </div>
    </section>
  );
};

export const Business = (props) => {
  const { content, img } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
      }}
    >
      <div>
        <Link href={"/ "}>
          <a>
            <img src={img} alt="img1" border="0" height="200px" width="250px" />
          </a>
        </Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Link href={"/"}>
            <a style={styles.business}>Business, Travel</a>
            {/* <a style={styles.business}>Travel</a> */}
          </Link>
        </div>
        <div style={styles.text}>{content}</div>
        <Author />
      </div>
    </div>
  );
};

export default SectionFour;

const styles = {
  head: {
    display: "flex",
    marginLeft: "11%",
    // justifyContent: "center",
  },
  business: {
    color: "orange",
    textDecoration: "none",
    padding: "10px",
  },
  text: {
    // fontSize: "20px",
    color: "#525252",
    textAlign: "justify",
    width: "63%",
    padding: "10px",
  },
  map: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "20px",
    marginLeft: "5%",
  },
};
