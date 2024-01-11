// import { Fragment } from "react"

// On peut mettre dans une variable un attribut HTML, comme l'id, la classe, le style etc...
const title = 'Bonjour les gens !'
const title2 = 'Coucou tout le monde'
const styleTitle = {color: 'darkred', backgroundColor: 'grey'}
const showTitle = false // si on mmet à "true", on aura la variable "title", soit "Bonjour les gens !"
const todos = [
  'Faire ceci',
  'Faire celà',
  'Ne pas oublier ça'
]

function App() {

  // écouteur d'évenements
  // const handleClick = (e /* facultatif */) => {
  //  e.preventDefault() // on peut placer le preventDefault
  //  e.stopPropagation() // ou tout autre chose comme le stopPropagation
  //  alert('CLICK on title !!!')
  // }

  return <>
            {showTitle ? 
              <h1 /* onClick={handleClick} */ id="title" className={title} style={styleTitle}>{title}</h1> : 
              <h1>{title2}</h1>
            }
            <Title color="red"/>
            <p>
              Le JSX est du JavaScript classique dans lequel on va pouvoir rajouter une sorte de structure HTML.<br/>
              On peut entourer d&#39;autres balises, mais pas les mettre à la suite.<br/>
              Sinon, il faudra utiliser les &#39;Fragment&#39; (ou avec une balise HTML vide)<br/>
              Toutes les balises doivent être fermées (ou autofermante, comme les input, les img etc)<br/>
              <hr/>
              Le style devra être passé sous forme d&#39;objet.<br/>
              Les propriétés CSS sont en camelCase ; ex : background-color = backgroundColor.
            </p>
            <input type="text"/>

            <ul>
              {todos.map(todo => (<li key={todo}>{todo}</li>))}
            </ul>
            <p>
              La clé `key` dans les liste est obligatoire et importante car si on doit réorganiser les éléments, il doit pouvoir savoir où il sont pour les manipuler correctement.
            </p>
          </>
}

function Title () { 
  
  // on peut définir des props que serton donc les attribut de l'élements
  const props = {
    id: 'monid',
    className: 'myClass'
  }
  // et on agrémente donc en attributs grace à un spread operator
  return <h2 {...props}>Je suis un sous-titre composant !</h2>
}

export default App

// Le JSX est du JavaScript classique dans lequel on va puovoir rajouter une sorte de structure HTML
