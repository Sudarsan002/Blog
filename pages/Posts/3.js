import React from "react";

const Three = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>COLLEEN HOOVER</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>REMINDERS OF HIM</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-8ae7811c3615f4ebdc544e0c3883f570-lq"
          height="400"
          width="450"
        />
      </div>
      <div>
        <label style={styles.label}> Synopsis</label>
      </div>
      <div style={styles.paragraph}>
        <p>
          Rich Dad Poor Dad is about Robert Kiyosaki <strong>(author)</strong>
          and his two dads—his real father <strong>(poor dad)</strong> and the
          father of his best friend
          <strong> (rich dad)</strong> —and the ways in which both men shaped
          his thoughts about money and investing. The book explodes the myth
          that you do not need to earn a high income to become rich.
        </p>
      </div>
      <div>
        <label style={styles.label1}>
          <i> Rich Dad Poor Dad...</i>
        </label>
      </div>

      <div style={styles.points}>
        <ul>
          <li>
            Explodes the myth that you need to earn a high income to become rich
          </li>
          <li>Challenges the belief that your house is an asset</li>
          <li>
            Shows parents why they can't rely on the school system to teach
            their kids about money
          </li>
          <li>Defines once and for all an asset and a liability</li>
          <li>
            Teaches you what to teach your kids about money for their future
            financial success
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Three;

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
    marginRight: "45%",
    fontSize: "25px",
  },
  label1: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    marginRight: "36%",
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
