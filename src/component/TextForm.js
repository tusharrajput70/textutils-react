import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);

  }
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");


  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");

  }
  const colorClick=()=>{
    let r= Math.floor(Math.random()*255)+1;
    let g= Math.floor(Math.random()*255)+1;
    let b= Math.floor(Math.random()*255)+1;
    document.getElementById('myBox').style.color=`rgb(${r},${g},${b})`;
    props.showAlert("Color Changed","success");

  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","success");

  }
  let [text, setText] = useState("");
  // we can't change text like this
  // text="hello";  this is wrong

  // for setting text
  // setText('tushar');
  return (
    <>
        <div className="container" style={{color: props.mode ==='dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode ==='dark'? '#343a40':'white',color: props.mode ==='dark'? 'white':'black'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >
        Convert To UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
        Convert To LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
        clear
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={colorClick}>
        change color
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        copy text
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode ==='dark'? 'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    </div>
    </>
  )
}
