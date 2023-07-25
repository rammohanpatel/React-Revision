import React from 'react'

const App = () => {
  const name='Ram';
  // const isName=true;
  return (
    <div>
      Hello
      {
        name?(<>
        <h1>Ram Mohan Patel</h1>
        </>):(
          <>
          No name is there
          </>
        )
      }
    </div>
  )
}

export default App
