import Demo from "./demo"

function App() {
  const name = "React Developer";
  return (
    <div> 
      <Demo/>
      <h1>Hello from App</h1>
      <p>This is a simple React application.</p>
      <p>It demonstrates how to create a basic component and render it.</p>
      <h2>My name is {name}</h2>
      {/* {name } is called as an evaluated expression */}
    </div>
    
  )
}

export default App;
