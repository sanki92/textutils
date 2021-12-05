import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase", "info");
    }
    const handleCapsClick=()=>{
        let newText = text.charAt(0).toUpperCase();
        setText(newText+text.slice(1).toLowerCase());
        props.showAlert("Text is Capitalized", "info");

    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text Area is Clear now", "warning");
    }
    const handleDownClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowercase", "info");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleCopyClick=(event)=>{
     let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value)      
     props.showAlert("Text is Copied to the Clipboard", "info");

};
    const [text, setText] = useState("");
    return (
        <>
        <div className="container text-center">
            <h1 className="my-5 text-center">{props.heading}</h1>
            <div className="mb-3">
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCapsClick}>Capitalize</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
        </div>
        <div className="container text-center my-2" >
             <h1>Your Text has</h1>
             <p><i>Words : </i>{text.split(" ").length-1}, <i>Character : </i>{text.length}</p>
             <p><i>This text will take </i>  {0.008*(text.split(" ").length-1)} <i> minutes to read</i></p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Enter your text to preview it..."}</p>
        </div>
        </>
    )
}
