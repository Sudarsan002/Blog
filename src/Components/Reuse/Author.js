import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
export default function Author() {
  return (
    <div>
      <div className="author">
        <BsFillPersonFill className="author"/>
       <div style={{display:"flex",flexDirection:"column"}}> <div>Author</div>
        <div className="text">CEO and Founder</div></div>
      </div>
    </div>
  );
}

