import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
const Endswithus = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}> Akshat Gupta</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>The Hidden Hindu</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://www.thestatesman.com/wp-content/uploads/2022/03/The-Hidden-Hindu-Book-2.jpeg"
          height="300"
          width="300"
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
          Prithvi, a twenty-one-year-old, is searching for a mysterious
          middle-aged aghori (Shiva devotee), Om Shastri, who was traced more
          than 200 years ago before he was captured and transported to a
          high-tech facility on an isolated Indian island. When the aghori was
          drugged and hypnotized for interrogation by a team of specialists, he
          claimed to have witnessed all four yugas (the epochs in Hinduism) and
          even participated in both Ramayana and Mahabharata. Om's revelations
          of his incredible past that defied the nature of mortality left
          everyone baffled. The team also discovers that Om had been in search
          of the other immortals from every yuga. These bizarre secrets could
          shake up the ancient beliefs of the present and alter the course of
          the future. So who is Om Shastri? Why was he captured? Board the boat
          of Om Shastri's secrets, Prithvi's pursuit and adventures of other
          enigmatic immortals of Hindu mythology in this exciting and revealing
          journey.
        </ReactReadMoreReadLess>
      </div>
    </section>
  );
};

export default Endswithus;

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
