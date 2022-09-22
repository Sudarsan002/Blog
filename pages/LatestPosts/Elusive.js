import React from "react";

const Elusive = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div style={styles.main}>Frank Close</div>
      <div style={styles.main}>
        <h1>
          <a>
            <b>Elusive</b>
          </a>
        </h1>
      </div>
      <div style={styles.main}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylie_KveDTmvjYvrAlhlR8b9fIyCfaKQV6Mwy8Sn29aWdmWLJ2yCGSCG5LqZBZoDUnpM&usqp=CAU"
          height="350"
          width="300" 
        />
      </div>
      <div>
        <label style={styles.label}>
          
          <p>
            <strong>
              <i>A New York Times Book Review Editor's Choice Selection</i>
            </strong>
          </p>
        </label>
      </div>

      
      <div>
        <label style={styles.label1}></label>
      </div>

      <div style={styles.points}>
        <p>
          On July 4, 2012, the announcement came that one of the longest-running
          mysteries in physics had been solved: the Higgs boson, the missing
          piece in understanding why particles have mass, had finally been
          discovered. On the rostrum, surrounded by jostling physicists and
          media, was the particle’s retiring namesake—the only person in history
          to have an existing single particle named for them. Why Peter Higgs?
          Drawing on years of conversations with Higgs and others, Close
          illuminates how an unprolific man became one of the world’s most
          famous scientists. Close finds that scientific competition between
          people, institutions, and states played as much of a role in making
          Higgs famous as Higgs’s work did.
        </p>
        
      </div>
      
    </section>
  );
};

export default Elusive;

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
