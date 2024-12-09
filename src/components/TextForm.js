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

    const handleClearText = () =>{
        console.log("ClearText button clicked.")
        let newText = '';
        setText(newText)
    }

    const handleCopyText = () => {
        console.log("Copy button clicked.");
        navigator.clipboard.writeText(text);
      };

      const handleTitleCase = () => {
        console.log("Title Case button clicked.");
        let newText = text
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        setText(newText);
      };

    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <>
    <div className="container mb-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea><br/>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleTitleCase}>Title Case
        </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Text Summary</h1>
        <p>Total Word : {text.split(" ").length}</p>
        <p>Total Character : {text.length}</p>
        <p>Total Minutes to Read : {0.008*text.split(" ").length} minutes</p>
    </div>
    </> 
    
  )
}
