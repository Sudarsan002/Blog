import React from "react";

const NewsLetter = () => {
  return (
    <section>
      <div className="newslettermain">Subscribe Newsletter</div>
      <div className="newsletterinput">
        <input
          type="text"
          placeholder="Enter Your Email..."
         className="input"
        />
      </div>
      <div className="newsletterinput">
        <button className="btn">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;

