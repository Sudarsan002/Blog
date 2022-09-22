import React from "react";

const Work = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>Chetan Bhagat</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>Half Ghoirlfriend</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src=" https://i.ibb.co/khXq1y8/cb.jpg"
          height="300"
          width="300"
        />
      </div>
     


      <div style={styles.points}>
        <p>
        The story of this novel is set in locations such as rural Bihar, New Delhi, Patna, and New York. This is the story of a boy from Bihar who is on a quest to win over the girl he loves. In this book, Chetan Bhagat dives into the sentiments experienced by a backward rural boy who enrols himself at the prestigious English-medium St. Stephen’s College, New Delhi. He then falls in love with a classy English-speaking rich girl from Delhi. He has a major linguistic set back as he doesn't speak English well. The girl does not give in to his attempts but instead agrees to be his "half girlfriend”.
        </p>
      </div>
      
    </section>
  );
};

export default Work;

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
