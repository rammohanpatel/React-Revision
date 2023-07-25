import React from 'react'

//This is a custom component 
const Person =({name,age,gender})=>{
return(
  <>
  <h1>Name: {name}</h1>
  <h2>Age:{age}</h2>
  <h2>Gender:{gender}</h2>
  </>
)
}

const App = () => {
  
  return (
    <div>
       <Person name={'Dev'} age={18} gender={'Male'}  />
       <Person name={'Harry'} age={13} gender={'Male'}/>
       <Person name={'Devansh'} age={14} gender={'Male'}/>
       <Person name={'Devesh'} age={16} gender={'Male'}/>
       <Person name={'Don'} age={12} gender={'Male'}/>
    </div>
  )
}

export default App
