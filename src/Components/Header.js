import React from "react";
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

export const Header = () => {
  return (
    <section style={styles.maincontainer}>
      <Link href="/">
        <AiOutlineHome style={{ color: "black", height: "0%", width: "2%" }} />
      </Link>
      {/* <input type="text" placeholder="Search..." style={styles.inputbox} /> */}

      <Link href="/">
        <a style={styles.Design}> Design</a>
      </Link>
      <div>
        <a style={{ marginRight: "10px" }}>
          <ImFacebook2 />
        </a>

        <a>
          <ImTwitter />
        </a>

        <a style={{ marginLeft: "10px", color: "black" }}>
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
    justifyContent: "space-between ",
  },
  inputbox: {
    borderRadius: "15px",
    // padding: "3%",
    borderColor: "#f6f6f6",
    border: "#f6f6f6",
    // height: "25px",
    width: "15",
  },
  Design: {
    fontSize: "30px",
    fontFamily: "Roboto",
    marginRight: "6%",
    fontWeight: "700",
    textDecoration: "none",
    color: "black",
  },
};
