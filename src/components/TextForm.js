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
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea><br/>
        <button className="btn btn-outline-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-outline-primary" onClick={handleLowerCase}>Convert to LowerCase</button>
    </div>
    </>
    
  )
}
