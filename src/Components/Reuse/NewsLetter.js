import React from "react";

const NewsLetter = () => {
  return (
    <section>
      <div style={styles.main}>Subscribe Newsletter</div>
      <div style={styles.inputdiv}>
        <input
          type="text"
          placeholder="Enter Your Email..."
          style={styles.input}
        />
      </div>
      <div style={styles.btn}>
        <button style={styles.btnn}>Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "32px",
    color: "#505050",
  },
  input: {
    width: "60%",
    padding: "5px",
    borderRadius: "25px",
    border: "#f6f6f6",
    height: "30px",
  },
  inputdiv: { display: "flex", justifyContent: "center", padding: "10px" },
  btn: { display: "flex", justifyContent: "center", padding: "10px" },
  btnn: {
    width: "14%",
    border: "white",
    borderRadius: "18px",
    height: "40px",
    textAlign: "center",
    background: "orange",
    fontSize: "20px",
    color:"white"
  },
};
