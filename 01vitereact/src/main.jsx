import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
const reactElement1={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'click me to visit google'
}
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    click me to visit google
  </a>
)

const reactElement2=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  },
  'click me to visit google'
)
function MyApp() {
  return (
    <div>
      <h1>Hello from myApp</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    MyApp() /* this is a function call, it will return a React element, but it is not a valid React component. */
    {MyApp()} /* this is a valid React element, as it is created using JSX syntax. */
    <MyApp /> {/* this is a valid React component, as it is a function that returns a React element. */}
    <App />
    {/* <reactElement1/> or reactElement1() */} 
     {/* we cant use this syntax, as reactElement is not a valid React component. as it is an object ans react expects a component or a valid React element. */}

     {anotherElement} /* this is a valid React element, as it is created using JSX syntax. */
    {reactElement2} /* this is a valid React element, as it is created using React.createElement() method. */
  </StrictMode>,
)
