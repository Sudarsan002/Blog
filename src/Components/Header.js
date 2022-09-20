import React from "react";
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";


export const Header = () => {
  return (
    <section style={styles.maincontainer}>
      <div>
        <input type="text" placeholder="Search..." style={styles.inputbox} />
      </div>
      <div style={styles.Design}>
        <a> Design</a>
      </div>
      <div>
        <a style={{ marginRight: "10px" }}>
          <ImFacebook2 />
        </a>

        <a>
          <ImTwitter />
        </a>

        <a
          // href="https://www.youtube.com/watch?v=1T3GF6endl8"
          style={{ marginLeft: "10px", color: "black" }}
        >
          <ImYoutube />
        </a>
      </div>
    </section>
  );
};


const styles = {
  maincontainer: {
    backgroundColor: "#f6f6f6",
    padding: "2%",
    display: "flex",
    justifyContent: "space-around ",
  },
  inputbox: {
    borderRadius: "15px",
    padding: "3%",
    borderColor:"#f6f6f6",
    border:"#f6f6f6",
    height:"25px",
    width:"150%"
  },
  Design: {
    fontSize: "24px",
    fontFamily: "Nunito",
    marginRight: "6%",
  },
};
