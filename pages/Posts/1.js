import React from "react";

const One = () => {


  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div className="mainsection">J.K. Rowling</div>
      <div className="mainsection">
        <h1>
          <a>
            <b>Harry Potter and the Philosopher’s Stone</b>
          </a>
        </h1>
      </div>
      <div className="mainsection">
        <img
          src="https://cf.shopee.ph/file/3a0a6bde6b61e9bec46f554a33033125"
          height="450"
          width="450"
        />
      </div>
      <div>
        <label className="mainlabel"> What is This Book About?</label>
      </div>
      <div className="mainparagraph">
        <p>
          It is a story about Harry Potter, an orphan brought up by his aunt and
          uncle because his parents were killed when he was a baby. Harry is
          unloved by his uncle and aunt but everything changes when he is
          invited to join Hogwarts School of Witchcraft and Wizardry and he
          finds out he's a wizard. 
        </p>
      </div>
      <div>
        <label className="mainlabel1">
          5 Facts Harry Potter and the Philosopher’s Stone
        </label>
      </div>

      <div className="mainpoints">
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

