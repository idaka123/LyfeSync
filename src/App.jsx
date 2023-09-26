import { useState } from 'react'
import GlobalStyles from './GlobalStyle'

const App = () => {
  const [count, setCount] = useState(0)

  const update = () => {
    const count = Math.floor(Math.random() * 10)
    setCount(count)
  }

  return (
    <>
      <GlobalStyles />
      <button onClick={update}>{count}</button>

    </>
  )
}

export default App
