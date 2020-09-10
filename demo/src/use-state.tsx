import { h, render, useState } from '../../src'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <span>{count}</span>  
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

render(<App />, document.body)