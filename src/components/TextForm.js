import React , {useState} from 'react'

export default function TextForm(props) {
    
    // to handle clicks on the button (converts into uppercase)
    const  handleOnClick =()=> {
       console.log("you clicked")
       let newText = text.toUpperCase();
       setText (newText)
    }
    // to handle click which converts into lowercase
    const lowerCase = ()=> {
        let newText = text.toLowerCase();
        setText (newText)
    }

    // to handle the change of state of text  area
    const  handleOnChange =(event)=> {
        //    console.log("changed the state")
           setText (event.target.value)
    }
    const [text, setText] = useState("enter text here")
  return (
    <>
      <div>
          <h1>{props.heading} </h1>
          <div className="mb-3">

              <textarea className="form-control" value = {text} onChange ={handleOnChange} style = {{backgroundColor: props.mode === 'dark'? '#2b3035': 'white' , color : props.mode === 'dark'? 'white': 'black'}} id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className="btn btn-primary m-1" onClick={handleOnClick}>conver to upper case</button>
          <button className="btn btn-primary " onClick={lowerCase}>conver to lower case</button>
      </div>
  <div className="container">
       <h2>Your text summary </h2>
       <p>Your text has {text.split (" ").length} words and {text.length} characters</p>
       <h2>Preview</h2>
       <p>{text}</p>

  </div>
      </>
  )
}

// onClick , onChange are two methods used in react