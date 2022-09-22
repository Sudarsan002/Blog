import React from "react";

const Endswithus = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}> Colleen Hoover</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>IT STARTS WITH US</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://www.whitcoulls.co.nz/content/products/42/26/6722642_MAIN.jpg?width=416&height=620&fit=bounds&enable=upscale&bg-color=ffffff&canvas=416%2C620"
          height="350"
          width="300"
        />
      </div>

      <div>
        <label style={styles.label1}></label>
      </div>

      <div style={styles.points}>
        <p>
          Lily and her ex-husband, Ryle, have just settled into a civil
          coparenting rhythm when she suddenly bumps into her first love, Atlas,
          again. After nearly two years separated, she is elated that for once,
          time is on their side, and she immediately says yes when Atlas asks
          her on a date. But her excitement is quickly hampered by the knowledge
          that, though they are no longer married, Ryle is still very much a
          part of her life—and Atlas Corrigan is the one man he will hate being
          in his ex-wife and daughter’s life.
        </p>
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
    display: "flex",
    marginLeft: "23%",
    fontSize: "18px",
    textAlign: "justify",
    width: "52%",
  },
};
