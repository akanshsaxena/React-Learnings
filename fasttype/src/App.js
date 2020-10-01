import React, { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const START_TIME = 10;
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(START_TIME);
  const [wordCount, setWordCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsStarted(true);
  };

  useEffect(() => {
    if (isStarted && timer > 0) {
      setWordCount(0);
      setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (isStarted && timer === 0) {
      setWordCount(text.trim().split(" ").length);
      setIsStarted(false);
      setTimer(START_TIME);
      setText("");
    }
  }, [timer, isStarted]);

  return (
    <div className="App">
      <Form
        text={text}
        handleChange={handleChange}
        handleClick={handleClick}
        wordCount={wordCount}
        timer={timer}
        isStarted={isStarted}
      />
    </div>
  );
}

export default App;
