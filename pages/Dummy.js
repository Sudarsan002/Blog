import React,{useState} from 'react';

function App() {
  const [readMore,setReadMore]=useState(false);


  <p>You've long been told to "Do what you love." Sounds simple, but the
          real challenge is how to do this in a world not set up to help you.
          Most of us actually don't know the real truth of what we love—what
          engages us and makes us thrive—and our workplaces, jobs, schools, even
          our parents, are focused instead on making us conform. Sadly, no
          person or system is dedicated to discovering the crucial intersection
          between what you love</p>

  const extraContent=<div>


      <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
        

      </p>
  </div>
  const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <div >
      <a  onClick={()=>{setReadMore(!readMore)}}><h1>{linkName}</h1></a>
      {readMore && extraContent}
    </div>
  );
}

export default App;

