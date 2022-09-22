import React from "react";

const One = () => {


  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>J.K. Rowling</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>Harry Potter and the Philosopher’s Stone</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://cf.shopee.ph/file/3a0a6bde6b61e9bec46f554a33033125"
          height="450"
          width="450"
        />
      </div>
      <div>
        <label style={styles.label}> What is This Book About?</label>
      </div>
      <div style={styles.paragraph}>
        <p>
          It is a story about Harry Potter, an orphan brought up by his aunt and
          uncle because his parents were killed when he was a baby. Harry is
          unloved by his uncle and aunt but everything changes when he is
          invited to join Hogwarts School of Witchcraft and Wizardry and he
          finds out he's a wizard. 
        </p>
      </div>
      <div>
        <label style={styles.label1}>
          5 Facts Harry Potter and the Philosopher’s Stone
        </label>
      </div>

      <div style={styles.points}>
        <ul>
          <li>Alan Rickman was hand-picked to play Snape by J.K. Rowling, and received special instruction from her as to his character. Rowling even provided the actor with vital details of Snape’s back story not revealed until the final novel.

</li>
          <li>
          The Hogwarts motto, “Draco dormiens nunquam titillandus”, means “never tickle a sleeping dragon”.
          </li>
          <li>Platform 9 3/4 was filmed at King’s Cross, but on platforms 4 and 5.</li>
          <li>In the script, the flashbacks to Voldemort killing Harry’s parents were written by J.K. Rowling herself. The producers knew she was the only one who knew exactly what happened.</li>
        </ul>
      </div>
    </section>
  );
};

export default One;

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
    fontSize: "25px",
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
  points: { display: "flex", marginLeft: "23%", fontSize: "18px" ,textAlign:"justify",width:"52%"},
};
