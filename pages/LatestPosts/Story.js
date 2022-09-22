import React from "react";

const Whowill = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>Catherine Burns</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>How to Tell a Story</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://media.npr.org/assets/img/2022/04/26/the-moth_9780593139004-copy_custom-4a67aef1f7dc880e0bd2037e7addc96f11cc0469.jpg"
          height="350"
          width="300"
        />
      </div>
      <div style={styles.points}>
        <p>
          The definitive guide to telling an unforgettable story in any setting,
          drawing on twenty-five years of experience from the storytelling
          experts at The Moth Over the past twenty-five years, the directors of
          The Moth have worked with people from all walks of life—including
          astronauts, hairdressers, rock stars, a retired pickpocket, high
          school students, and Nobel Prize winners—to develop true personal
          stories that have moved and delighted live audiences and listeners of
          The Moth’s Peabody Award–winning radio hour and podcast. A leader in
          the modern storytelling movement, The Moth inspires thousands of
          people around the globe to share their stories each year.
        </p>
      </div>
    </section>
  );
};

export default Whowill;

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
