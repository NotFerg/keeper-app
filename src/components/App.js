import React from "react";
import Header from "./headingComponent/Heading.jsx";
import Footer from "./footerComponent/Footer.jsx"
import Note from "./noteComponent/Note.jsx"
import Test from "./testComponent/test.jsx"
import Notes from "./notes.js"

function App() {
  return (
   <div>
    <Header/>
    {Notes.map((Notes)=>(
      <Note
      key = {Notes.key}
      title = {Notes.title}
      content = {Notes.content}
       />
    ))}
    <Footer />
 
   </div>
  );
}

export default App;
