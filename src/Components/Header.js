import React from "react";
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

export const Header = () => {
  return (
    <section className="header">
      <Link href="/">
        <AiOutlineHome style={{ color: "black", height: "0%", width: "2%" }} />
      </Link>


      <Link href="/">
        <a className="design"> Design</a>
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

