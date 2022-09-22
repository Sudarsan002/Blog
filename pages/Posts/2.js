import React from "react";



const Two = () => {

   
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
          src="https://i.pinimg.com/736x/46/72/a9/4672a99cbfc6a466e7015da60f0c24e6.jpg"
          height="400"
          width="450"
        />
      </div>
      <div>
        <label style={styles.label}> Synopsis</label>
      </div>
      <div style={styles.paragraph}>
        <p>
          In Reminders of Him, Kenna Rowan is a 26-year-old woman who has
          recently been released from prison after causing the death of her
          boyfriend, Scotty, in a drunk driving accident five years earlier. She
          returns to town in the hopes of regaining custody of her and Scotty's
          daughter who is being raised by Scotty's parents, the Landrys.
         
        </p>
      </div>
      <div>
        <label style={styles.label}> Summary</label>
      </div>

      <div style={styles.points}>
        <ul>
          <p>8
            A troubled young mother yearns for a shot at redemption in this
            heartbreaking yet hopeful story from #1 New York Times bestselling
            author Colleen Hoover. But the bridges Kenna burned are proving
            impossible to rebuild.
          </p>
          <p>
            After serving five years in prison for a tragic mistake, Kenna Rowan
            returns to the town where it all went wrong, hoping to reunite with
            her four-year-old daughter.
          </p>
          <p>
            Everyone in her daughter’s life is determined to shut Kenna out, no
            matter how hard she works to prove herself.
          </p>
          <p>
            The only person who hasn’t closed the door on her completely is
            Ledger Ward, a local bar owner and one of the few remaining links to
            Kenna’s daughter.
          </p>
          <p>
            But if anyone were to discover how Ledger is slowly becoming an
            important part of Kenna’s life, both would risk losing the trust of
            everyone important to them.
          </p>
        </ul>
      </div>
    </section>
  );

};

export default Two;

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
