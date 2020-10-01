import React, { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(20);
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
      setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      setWordCount(text.trim().split(" ").length);
      setIsStarted(false);
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
