import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
export default function Author() {
  return (
    <div>
      <div style={{ display: "flex", flexDireciton: "row" }}>
        <BsFillPersonFill style={styles.author} />
       <div style={{display:"flex",flexDirection:"column"}}> <div>Author</div>
        <div style={styles.text}>CEO and Founder</div></div>
      </div>
    </div>
  );
}
const styles = {
  author: { 
    height: "0%",
    width: "40px",
  },
  text:{
    color:"#696969"
  }
};
