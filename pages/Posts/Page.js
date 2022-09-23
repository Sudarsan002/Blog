import React from "react";

const Page = () => {
  return (
    <section style={{padding:"30px 50px 30px"}}>
    
      <div className="mainsection">Ankur Warikoo</div>
      <div className="mainsection">
        <h1>
          <a><b>DO EPIC SHIT</b></a>
        </h1>
      </div>
      <div className="mainsection">
        <img
          src="https://pbs.twimg.com/media/FNPnhuwVcAIe6S8.jpg"
          height="450"
          width="450"
        />
      </div>
      <div>
        <label className="mainlabel"> What is This Book About?</label>
      </div>
      <div className="mainparagraph">
        <p>
          Do Epic Shit is a book by Ankur Warikoo where he writes about all the
          failures and successes he had in his life. He also reflects on the
          lessons he has learned the hard way to help us be aware of those
          situations. You will find valuable lessons in this book that you can
          use in your life.
        </p>
      </div>
      <div>
        <label className="mainlabel1">
          5 Valuable Lessons From the Book: Do Epic Shit
        </label>
      </div>

      <div className="mainpoints">
        <ul>
          <li>Passion is not something you find. It's something you grow.</li>
          <li>
            Be curious. It’s what creates opportunities more than hard work ever
            will.
          </li>
          <li>We procrastinate not because of laziness but because of fear.</li>
          <li>Respect -- Emapthy -- Sympathy.</li>
        </ul>
      </div>


    </section>
  );
};

export default Page;

