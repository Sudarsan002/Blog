import React, { useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Work = () => {
    const[read,setRead]=useState(false)
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>Marcus Buckingham</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>LOVE + WORK</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://www.omnycontent.com/d/clips/bfb0671f-9b87-4ed1-92a7-a9a50077dc97/ec37dbe9-ecd0-40e6-a17f-a9aa00927561/58ea910b-9372-4b0b-be57-aeb90046e648/image.jpg?t=1655612456&size=Large"
          height="400"
          width="350"
        />
      </div>

      <div>
        <label style={styles.label1}></label>
      </div>
      <div
        style={{
          width: "40%",
          textAlign: "justify",
          justifyContent: "center",
          marginLeft: "30%",
        }}
      >
        <ReactReadMoreReadLess
          charLimit={400}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          
        >
          You've long been told to "Do what you love." Sounds simple, but the
          real challenge is how to do this in a world not set up to help you.
          Most of us actually don't know the real truth of what we love—what
          engages us and makes us thrive—and our workplaces, jobs, schools, even
          our parents, are focused instead on making us conform. Sadly, no
          person or system is dedicated to discovering the crucial intersection
          between what you love to do and how you contribute it to others. In
          this eye-opening, uplifting book, Buckingham shows you how to break
          free from this conformity—how to decode your own loves, turn them into
          their most powerful expression, and do the same for those you lead and
          those you love. How can you use love to reveal your unique gifts? How
          can you pinpoint what makes you stand out from anyone else? How can
          you choose roles in which you'll excel? Love and Work unlocks answers
          to these questions and others, so you can: Choose the right role on
          the team. Describe yourself compellingly in job interviews. Mold your
          existing role so that it calls upon the very best of you. Position
          yourself as a leader in such a way that your followers quickly come to
          trust in you. Make lasting change for your team, your company, your
          family, or your students. Love, the most powerful of human emotions,
          the source of all creativity, collaboration, insight, and excellence,
          has been systematically drained from our lives—our work, teams, and
          classrooms. It's time we brought love back in. Love and Work shows you
          how.
          {/* </p> */}
        </ReactReadMoreReadLess>
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
