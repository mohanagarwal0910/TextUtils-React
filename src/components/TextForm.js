import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
          let newText=text.toUpperCase();
          setText(newText)
          props.showAlert("converted to uppercase","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to loweercase","success")
  }
    const handleOnChange=(event)=>{
        setText(event.target.value)
  }
  const handleClear=()=>{
    let newText=" ";
        setText(newText)
        props.showAlert("cleared text","success")
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text copied","success")
  }
   const handleExtraSpaces=()=>{
     let newText=text.split(/[ ]+/)
     setText(newText.join(" "));
     props.showAlert("removed extra space","success")
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode===`dark` ? `white`:`black`}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark` ? `grey`:`white`,color:props.mode===`dark` ? `white`:`#042743`}} id="myBox" rows="8"> </textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleClear}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy text</button>
      <button disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode===`dark` ? `white`:`black`}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
