import React from "react";

const Whowill = () => {

    
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>Robin Sharma</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>WHO WILL CRY WHEN YOU DIE</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/80f4e7e2c26c42dfa135aaf2992e1cec.jpg"
          height="350"
          width="300"
        />
      </div>
      <div>
        {/* <label style={styles.label}>
          <p>
            <strong>
              <i>A New York Times Book Review Editor's Choice Selection</i>
            </strong>
          </p>
        </label> */}
      </div>

      <div>
        <label style={styles.label1}></label>
      </div>

      <div style={styles.points}>
        <p>
          Life Lessons From The Monk Who Sold His Ferrari Do You Feel that life
          is slipping by so fast that you might never get the chance to live
          with the meaning, happiness and joy you know you deserve? If so, then
          this book will be the guiding light that leads you to a brilliant new
          way of living. In this easy-to-read yet wisdom-rich manual, the author
          offers 101 simple solutions to life’s most complex problems, ranging
          from a little-known method for beating stress and worry to a powerful
          way to enjoy the journey while you create a legacy that lasts. “When
          You Were Born, You Cried While The World Rejoiced. Live Your Life In
          Such A Way That When You Die, The World Cries While You Rejoice.”
          Ancient Sanskrit Saying
        </p>
      </div>
      <p style={styles.points}>
        A revelatory study of both a scientist and his era, Elusive will remake
        our understanding of modern physics.
      </p>
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
