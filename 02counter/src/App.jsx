import { useState } from 'react' 
//useState is a common React hook for managing state.
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  function addValue() {
    if (counter >= 20) {
      alert('Counter cannot exceed 20')
      return
    }
    setCounter(counter + 1)
    //setCounter is a function that updates the state variable counter.
    //It takes the current value of counter and adds 1 to it.
    //This will trigger a re-render of the component with the updated counter value.
  }
  const removeValue = () => {
    if( counter <= 0) {
      alert('Counter cannot be less than 0')
      return
    }
    setCounter(counter - 1)
    //setCounter is a function that updates the state variable counter.
    //It takes the current value of counter and subtracts 1 from it.
    //This will trigger a re-render of the component with the updated counter value.
  }
  return (
    <>
      <h1> React</h1>
      <h2>counter:{counter}</h2>

      <button onClick={addValue}> Add value</button>
      <br />
      <br />
      <button onClick={removeValue}> remove value</button>
    </>
  )
}

export default App
