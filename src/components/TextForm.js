import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpperCase = () =>{
        console.log("Uppercase button clicked.")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = () =>{
        console.log("Lowercase button clicked.")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <>
    <div className="container mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea><br/>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Text Summary</h1>
        <p>Total Word : {text.split(" ").length}</p>
        <p>Total Character : {text.length}</p>
        <p>Total Minutes to Read : {0.008*text.split(" ").length} minutes</p>
    </div>
    </> 
    
  )
}
