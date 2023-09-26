import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Feito por thiago
        </p>
      </div>
      <iframe src="https://app.powerbi.com/view?r=eyJrIjoiOTMxNzFlMjItYzFjNy00NzNjLWIzZDctOTg4NDM4OTQ0NzcwIiwidCI6IjgwZDI5NmRjLWNkNTUtNDJlNy04ZTJhLWY0MGZhNmRiZTQ3NyJ9" height="400" width="600" title="Iframe Example"></iframe>
    </>
  )
}

export default App
