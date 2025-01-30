import React,{useState} from 'react'

export default function Textform(props) {
const handleUpClick=()=>{
  console.log("uppercase was click" +text);
  let newtext=text.toUpperCase();
  setText(newtext);
  props.showalert("Uppercase is click","success");
 // setText("you have click handle click");
}
const handleloClick=()=>{
  
  let newtext=text.toLowerCase();
   setText(newtext);
   props.showalert("Lowercase is click","success");
}
 
const handleExtraClick=()=>{
   let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  }
const handleclClick=()=>{
  
  let newtext='';
  setText(newtext);
 }
const handlecopyClick=()=>{
  
 let text=document.getElementById('myBox');
 text.select();
 navigator.clipboard.writeText(text.value);
 props.showalert("your text is copy","success");
 }


  const handleonchange=(event)=>{
    console.log("onChange");
    setText(event.target.value);
  }
    const [text, setText] = useState('');
  return (
    <>
   <div className='contaner'style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
</div>

<button className="btn btn primary mx-2" style={{backgroundColor:'#0a58ca' ,color:'white'}} onClick={handleUpClick}>Covert To Uppercase</button>
<button className="btn btn primary mx-2"style={{backgroundColor:'#0a58ca' ,color:'white'}} onClick={handleloClick}>Covert To Lowercase</button>
<button className="btn btn primary mx-2"style={{backgroundColor:'#0a58ca' ,color:'white'}} onClick={handleclClick}>Clear Click</button>
<button className="btn btn primary mx-2"style={{backgroundColor:'#0a58ca' ,color:'white'}} onClick={handlecopyClick}>Copy Text</button>
<button className="btn btn primary mx-2"style={{backgroundColor:'#0a58ca' ,color:'white'}} onClick={handleExtraClick}>Remove Extra Spaces</button>
 </div>
    <div className='contaner my-3'style={{color:props.mode==='dark'?'white':'black'}}> 
      <h3>Your text summary</h3>
      <p>{text.trim()?text.trim().split(/\s+/).length : 0} word and {text.length } character</p>
      
      <p>{0.008*text.trim().length} min read time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the text box above to preview it here"}</p>
    </div>
    
    </>
  )

}
