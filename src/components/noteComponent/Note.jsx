import React from "react";
// import styles from "./note.module.css";

function Note(props) {
  return (
    <div className="note">
      <p></p>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
        props.onDelete(props.id);
      }}>DELETE</button>
    </div>
  );
}

export default Note;
