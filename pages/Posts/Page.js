import React from "react";

const Page = () => {
  return (
    <section style={{padding:"30px 50px 30px"}}>
    
      <div style={styles.main}>Ankur Warikoo</div>
      <div style={styles.main}>
        <h1>
          <a><b>DO EPIC SHIT</b></a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://pbs.twimg.com/media/FNPnhuwVcAIe6S8.jpg"
          height="450"
          width="450"
        />
      </div>
      <div>
        <label style={styles.label}> What is This Book About?</label>
      </div>
      <div style={styles.paragraph}>
        <p>
          Do Epic Shit is a book by Ankur Warikoo where he writes about all the
          failures and successes he had in his life. He also reflects on the
          lessons he has learned the hard way to help us be aware of those
          situations. You will find valuable lessons in this book that you can
          use in your life.
        </p>
      </div>
      <div>
        <label style={styles.label1}>
          5 Valuable Lessons From the Book: Do Epic Shit
        </label>
      </div>

      <div style={styles.points}>
        <ul>
          <li>Passion is not something you find. It's something you grow.</li>
          <li>
            Be curious. It’s what creates opportunities more than hard work ever
            will.
          </li>
          <li>We procrastinate not because of laziness but because of fear.</li>
          <li>Respect -- Emapthy -- Sympathy.</li>
        </ul>
      </div>


    </section>
  );
};

export default Page;

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
    marginRight: "38%",
    fontSize:"25px"
  },
  label1: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    marginRight: "21.5%",
    fontSize:"25px",
  },
  paragraph: {
    display: "flex",
    textAlign: "justify",
    width: "50%",
    marginLeft: "25%",
    fontSize:"18px"
  },
  points: { display: "flex", marginLeft: "23%" ,
  fontSize:"18px",
},
};
