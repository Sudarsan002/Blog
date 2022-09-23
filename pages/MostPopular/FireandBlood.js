import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
const Endswithus = () => {
  return (
    <section style={{ padding: "30px 50px 30px" }}>
      <div className="main">George R. R. Martin</div>
      <div className="main">
        <h1>
          <a>
            <b>Fire & Blood</b>
          </a>
        </h1>
      </div>
      <div className="main">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91iMu22uEWL.jpg"
          height="350"
          width="280"
        />
      </div>

    
      <div className="points">
      <ReactReadMoreReadLess
          charLimit={400}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
        >
        Set 300 years before the events in A Song of Ice and Fire, FIRE AND
        BLOOD is the definitive history of the Targaryens in Westeros as told by
        Archmaester Gyldayn and chronicles the conquest that united the Seven
        Kingdoms under Targaryen rule through to the Dance of the Dragons: the
        Targaryen civil war that nearly ended their dynasty forever. The
        thrilling history of the Targaryens comes to life in this masterly work
        by the author of A Song of Ice and Fire, the inspiration for HBO’s Game
        of Thrones. With all the fire and fury fans have come to expect from
        internationally bestselling author George R. R. Martin, this is the
        first volume of the definitive two-part history of the Targaryens in
        Westeros. Centuries before the events of A Game of Thrones, House
        Targaryen – the only family of dragon lords to survive the Doom of
        Valyria – took up residence on Dragonstone. Fire and Blood begins their
        tale with the legendary Aegon the Conqueror, creator of the Iron Throne
        and goes on to recount the generations of Targaryens who fought to hold
        that iconic seat, all the way up to the civil war that nearly tore their
        dynasty apart. What really happened during the Dance of the Dragons? Why
        did it become so deadly to visit Valyria after the Doom? What is the
        origin of Daenerys’s three dragon eggs? These are but a few of the
        questions answered in this essential chronicle, as related by a learned
        maester of the Citadel and featuring more than eighty all-new
        black-and-white illustrations by artist Doug Wheatley. Readers have
        glimpsed small parts of this narrative in such volumes as The World of
        Ice and Fire but now, for the first time, the full tapestry of Targaryen
        history is revealed. With all the scope and grandeur of Gibbon’s The
        History of the Decline and Fall of the Roman Empire, Fire and Blood is
        the ultimate game of thrones, giving readers a whole new appreciation
        for the dynamic, often bloody and always fascinating history of
        Westeros.
        </ReactReadMoreReadLess>
      </div>
    </section>
  );
};

export default Endswithus;

