import React,{useState,useEffect} from 'react'



const App = () => {
  
  const [counter,setCounter]=useState(0);
  
  //With the help of useEffect hook we can call some code whenever we want
  //like in below we are calling alert whenever counter is changing
  useEffect(()=>{
    // counter=110; Never do this as we can't directly change the counter
    alert("you have changed the counter to " + counter)
  },[counter])

  return (
    <div>
      {/* By wrapping the setCounter call inside an arrow function, you ensure that
       the setCounter function is called only when the button is clicked, not during
        the initial rendering. This way, the state will be updated correctly when 
        the user clicks the button. */}
     <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
     <h1>{counter}</h1>
     <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  )
}

export default App
