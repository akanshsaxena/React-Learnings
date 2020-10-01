import React from "react";

export default function Form(props) {
  return (
    <div className="Form">
      <h1> How fast can you type </h1>
      <form>
        <textarea value={props.text} onChange={props.handleChange} />
        <button onClick={props.handleClick}>Start</button>
      </form>
      <h3>Time remaining: {props.timer}</h3>
      <h3>Word count: {props.wordCount}</h3>
    </div>
  );
}
