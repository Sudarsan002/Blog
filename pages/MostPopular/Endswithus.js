import React from "react";

const Endswithus = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>Colleen Hoover</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>It Ends With Us: A Novel: Volume 1</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://thesparklyreader.files.wordpress.com/2016/07/it-ends-with-us1.jpg?w=640"
          height="350"
          width="350"
        />
      </div>

      <div>
        <label style={styles.label1}></label>
      </div>

      <div style={styles.points}>
        <p>
          Lily hasn’t always had it easy, but that’s never stopped her from
          working hard for the life she wants. She’s come a long way from the
          small town in Maine where she grew up — she graduated from college,
          moved to Boston, and started her own business. So when she feels a
          spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in
          Lily’s life suddenly seems almost too good to be true.
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
