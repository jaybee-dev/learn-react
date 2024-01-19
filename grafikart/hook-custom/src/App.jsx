import { useState } from 'react'
import { useIncrement } from './components/hooks/useIncrement'
import { useDocumentTitle } from './components/hooks/useDocumentTitle'
import { useFetch } from './components/hooks/useFetch'

// Un hook personnalisé n'est ni plus ni moins qu'une fonction qui va utiliser des hooks.
// Cette fonction va sytématiquement être nommée avec "use" suivit du nom de la fonction ( "useFonction "),
// Elle devra nécessairement être utilisée dans un composant.
// On y mettra à l'intérieur la même logique que celle que l'on mettait dans les composants

function App() {
  const [count, increment, decrement] = useIncrement()

  const {name, setName} = useDocumentTitle()

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  return (
    <>
    <div className='container-lg'>
      <h1 className='display-1'>Les hooks personnalisés</h1>
      <p>
        Un hook personnalisé n'est ni plus ni moins qu'une fonction qui va utiliser des hooks.<br/>
        Cette fonction va sytématiquement être nommée avec "use" suivit du nom de la fonction ( "useFonction "),<br/>
        Elle devra nécessairement être utilisée dans un composant.<br/>
        On y mettra à l'intérieur la même logique que celle que l'on mettait dans les composants.<br/>
        Il existe des sites mettant à disposition des hooks personnalisés :
        <ul>
          <li><a href="http://usehooks.com">usehooks.com</a></li>
          <li><a href="http://usehooks-ts.com">usehooks-ts.com (version TypeScript)</a></li>
          <li><a href="https://github.com/streamich/react-use">React-Use</a></li>
        </ul>
      </p>
      <div>{count}</div>
      <button className="btn btn-success" onClick={increment}>Incrémenter</button>
      <button className="btn btn-warning" onClick={decrement}>Décrementer</button>
      <div>{name}</div>
      <button className='btn btn-info' onClick={setName}>Editer</button>
      
      <div>
        {loading && <div>Chargement...</div>}
        {errors && <div>{errors.toString()}</div>}
        {data && <div> 
          <ul>
            {data.map(post => (<li key={post.id}>{post.title}</li>))}
          </ul>
          </div>}
      </div>
    </div>
    </>
  )
}

export default App
