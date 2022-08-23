
import { useState } from 'react'

import Button from '~/components/Button'

function App() {
  const [counter,setCounter] = useState(1)

  const handleIncrease = () =>{
    setCounter(prevState => prevState +1)
  }

  return (
    <div className="App" style={{padding:20}}>
      <Button />
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
