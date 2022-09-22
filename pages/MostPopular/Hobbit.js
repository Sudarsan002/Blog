import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
const Hobbit = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}> J. R. R. Tolkien</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>The Hobbit</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/710+HcoP38L.jpg"
          height="350"
          width="280"
        />
      </div>

      <div>
        <label style={styles.label1}></label>
      </div>

      <div style={styles.points}>
      <ReactReadMoreReadLess
          charLimit={400}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}

        > 
        The journey through Middle-earth begins here with J.R.R. Tolkien's
        classic prelude to his Lord of the Rings trilogy.“A glorious account of
        a magnificent adventure, filled with suspense and seasoned with a quiet
        humor that is irresistible... All those, young or old, who love a fine
        adventurous tale, beautifully told, will take The Hobbit to their
        hearts.”—The New York Times Book Review"In a hole in the ground there
        lived a hobbit." So begins one of the most beloved and delightful tales
        in the English language—Tolkien's prelude to The Lord of the Rings. Set
        in the imaginary world of Middle-earth, at once a classic myth and a
        modern fairy tale, The Hobbit is one of literature's most enduring and
        well-loved novels. Bilbo Baggins is a hobbit who enjoys a comfortable,
        unambitious life, rarely traveling any farther than his pantry or
        cellar. But his contentment is disturbed when the wizard Gandalf and a
        company of dwarves arrive on his doorstep one day to whisk him away on
        an adventure. They have launched a plot to raid the treasure hoard
        guarded by Smaug the Magnificent, a large and very dangerous dragon.
        Bilbo reluctantly joins their quest, unaware that on his journey to the
        Lonely Mountain he will encounter both a magic ring and a frightening
        creature known as Gollum.
      </ReactReadMoreReadLess>
      </div>
      
    </section>
  );
};

export default Hobbit;

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
  
    marginLeft: "23%",
    fontSize: "18px",
    textAlign: "justify",
    width: "52%",
  },
};
