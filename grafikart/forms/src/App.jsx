import { useState } from 'react'

function App() {

  const handleChange = (e) => {
    setFirstname(e.target.value)
  }

  const [firstname, setFirstname] = useState('John Doe')

  return <>
    <h1>REACT - Les formulaires</h1>
    <form>
      <input onChange={handleChange} type='text' name="firstname" value={firstname}/>
    </form>
  </>
}

export default App
