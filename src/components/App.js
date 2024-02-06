import React, {useState} from "react";
import Header from "./headingComponent/Heading.jsx";
import Footer from "./footerComponent/Footer.jsx"
import Note from "./noteComponent/Note.jsx"
import CreateArea from "./createAreaComponent/CreateArea.jsx";
import Test from "./testComponent/test.jsx"
import Notes from "./notes.js"

function App() {
  const [items,setItems]=useState([]);
  

  function addItem(inputNote) {
    setItems((prevItems) => {
      return [...prevItems, inputNote];
    });
  
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {items.map((entry,index)=>(
        <Note 
        key={index} 
        id={index}
        title={entry.title} 
        content={entry.content}
        onDelete={deleteItem}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;

