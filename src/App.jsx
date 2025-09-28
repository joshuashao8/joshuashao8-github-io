import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  const [count, setCount] = useState(0)

  const testvariable = "this is a test variable 🐼 "

  return (
    <>

      <h1>Hello World!</h1>
      <h1>Second Heading {3+33333} in a row</h1>    <h1>Second Heading in a row</h1>    <h1>Second Heading in a row</h1>    <h1>Second Heading in a row</h1>    <h1>Second Heading in a row</h1>
      <p>this is a paragraph</p>

      <h2>this heading uses a {testvariable}</h2>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
