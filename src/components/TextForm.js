import React, { useState } from "react";

export default function TextForm(prop) {
  const handleUPClick = () => {
    setText(text.toUpperCase());
    prop.showAlert("Converted in UpperCase", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLOClick = () => {
    setText(text.toLowerCase());
    prop.showAlert("Converted in LowerCase", "Success");
  };

  const clearText = () => {
    setText("");
  };

  const inversetext = () => {
    setText(text.split(/\s/).reverse().join(" "));
    prop.showAlert("Text reversed", "Success");
  };
  const removeSpace = () => {
    setText(text.replace(/\s+/g,' '));
    prop.showAlert("Extra spaces removed", "Success");
  };

  const copyText=()=>{
      var text=document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0,99999);
      navigator.clipboard.writeText(text.value);
      prop.showAlert("Copied to clipboard", "Success");
  }
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div
        className="container"
        style={{ color: prop.mode === "dark" ? "white" : "black" }}
      >
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="10"
            style={{
              backgroundColor: prop.mode === "dark" ? "grey" : "white",
              color: prop.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUPClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLOClick}
        >
          Convert to LowerCase
        </button>
        
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={inversetext}
        >
          Reverse text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={removeSpace}
        >
          Remove extra space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={copyText}
        >
          Copy text
        </button>
         
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>

      </div>
      <div
        className="container my-3"
        style={{ color: prop.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length - (text.split(" ").length - 1)} characters
        </p>
        <p>
          {(
            0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          ).toFixed(3)}{" "}
          Minutes read
        </p>
      </div>
    </>
  );
}
// onChange event is used so that we can type in the textarea
