import React, { useState } from 'react'

export default function TextForm(props) {

const handleOnchange = (event) =>{
    settext(event.target.value);
}

const handleUpclick = () =>{
let newText = text.toUpperCase();
settext(newText);
props.showAlert('Success','Converted to Uppercase!');
}

const handleLoclick = () =>{
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert('Success','Converted to Lowercase!');
}

const handleClearclick = () =>{
    let newText = " ";
    settext(newText);
    props.showAlert('Success','Text is Cleared!');
}

const handleCopyclick = () =>{
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.select);
    props.showAlert('Success','Copied!');
}

const handleClearExtraclick = () =>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert('Success','Extra Space is Cleared!');
}

const [text , settext] = useState("Enter Text here");

  return (
    <div>
<div className="mb-3" style= {{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" ></textarea>

  <button className="btn btn-primary my-3" disabled={text.length === 0} onClick={handleUpclick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-3" disabled={text.length === 0} onClick={handleLoclick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3" disabled={text.length === 0} onClick={handleClearclick}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-3" disabled={text.length === 0} onClick={handleCopyclick}>Copy Text</button>
  <button className="btn btn-primary my-3" disabled={text.length === 0} onClick={handleClearExtraclick}>Clear Extra Spaces</button>

  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary </h1>
    <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
  </div>

 <div className="container my-3">
    <h1>Preview</h1>
    <p>{text}</p>
  </div>
</div>
    </div>
  )
}
