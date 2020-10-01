import React from "react";

export default function Form(props) {
  return (
    <div className="form">
      <h1>
        How fast can you type <span>?</span>
      </h1>
      <form>
        <textarea
          className="textarea"
          value={props.text}
          onChange={props.handleChange}
          disabled={!props.isStarted}
        />
        <br />
        <button
          className="btn"
          onClick={props.handleClick}
          disabled={props.isStarted}
        >
          Start
        </button>
      </form>
      <h3>Time remaining: {props.timer} sec</h3>
      <h3>Word count: {props.wordCount}</h3>
    </div>
  );
}
