import { useState } from 'react' 
//useState is a common React hook for managing state.
import './App.css'
import { set } from 'mongoose'

function App() {
  let [counter,setCounter] = useState(0)

  function addValue() {
    if (counter >= 20) {
      alert('Counter cannot exceed 20')
      return
    }
    setCounter(counter + 1)
    setCounter(counter + 1)
    //even though we call setCounter twice, React will batch these updates
    //and only re-render the component once with the final value of counter.
    //This is an optimization that React performs to improve performance.

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    //This is an alternative way to update the state variable counter.
    //It uses the previous value of counter to calculate the new value.
    //This is useful when the new value depends on the previous value,
    //and it ensures that the state is updated correctly even if there are multiple updates in quick succession.
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
