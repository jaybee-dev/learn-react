import { useState } from "react"

function App() {
  
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  })


  const increment = () => {    
    setCount(count+1) // même on écrit cette ligne plusieurs fois à la suite (par exemple 3), il n'y auar une incrémentation que de 1 (pas 3 come on pourrait s'y attendre)
    // setCount((c) => c + 1) // - cette syntaxe permettra de récupérer l'état ; utile si on souhaite répéter l'action ci-dessus
    // Attention à la portée de variables : la variable 'count' si dessous et idépendente de la variable 'count' (d'où le 'c' pour bien mettre en exergue)
  }

  const increment2 = () => {
    setCount2(count2+1)
  }

  const addPerson = () => {
    setPerson({...person, age : person.age + 1}) // il n'est pas possible de faire une mutation de l'objet dans le cadre de REACT ; il faut lui rendre une nouvelle version de l'objet
  }

  return <>  
    <h1>REACT - Le hook useState</h1>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>

      <p>Age de {person.firstName} : {person.age}</p>
      <button onClick={addPerson}>Ajouter 1 année</button>

      <p>Compteur 2 : {count2}</p>
      <button onClick={increment2}>Incrémenter un autre</button>
  </>
}

export default App
