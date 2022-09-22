import React from "react";

const Youcan = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>George Matthew Adams</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>You can</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/813uPMOnskL.jpg"
          height="350"
          width="300"
        />
      </div>

      <div>
        <label style={styles.label1}></label>
      </div>

      <div style={styles.points}>
        <p>
          Do you often wonder whether you really have it in you to accomplish
          your goals, to win over obstacles, and to succeed in life? Through the
          empowering self-help manual You Can, penned to promote personal growth
          and well-being for anyone who reads it, George Matthew Adams talks
          about things to be done to pave your way to a fulfilling, successful
          life—such as sitting for an hour in silence to shape your creative
          vision, going the extra mile in serving others, letting your character
          rule your work, studying your mistakes, learning to use time, and many
          more. Inculcate these habits, and your life will change. A powerful
          guide that asserts that you can do anything you set your mind to, You
          Can is filled with quotes imparting wisdom of a man whose teachings
          have inspired millions—Napoleon Hill, and commentary by the executive
          director of The Napoleon Hill Foundation, Don M. Green. “You yourself
          determine the height to which you shall Climb. Have you the Summit in
          view?”
        </p>
      </div>
     
    </section>
  );
};

export default Youcan;

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
    color: "orange",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    marginRight: "24%",
    // fontSize: "25px",
  },
  label1: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    marginRight: "21.5%",
    fontSize: "25px",
  },
  paragraph: {
    display: "flex",
    textAlign: "justify",
    width: "50%",
    marginLeft: "25%",
    fontSize: "18px",
  },
  points: {
    display: "flex",
    marginLeft: "23%",
    fontSize: "18px",
    textAlign: "justify",
    width: "52%",
  },
};
