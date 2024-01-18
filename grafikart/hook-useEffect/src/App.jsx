import { Input } from './components/forms/Input.jsx';
import { Checkbox } from './components/forms/Checkbox.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [showInput, setShowInput] = useState(true)

  return <div className='container my-3 stack'>
      <Checkbox
        checked={showInput}
        onChange={setShowInput}
        id="titleshow"
        label="Afficher le champs titre"
        />
        {showInput && <EditTitle />}      
    </div>
}

function EditTitle () {

  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

  useEffect(() => {
    const originalTitle = document.title
    return () => {
      document.title = originalTitle
    }
  }, []);
  
  // Ce hook permet de générer des effets de bord lorsque certaines propriétés
  // ou certains états des composants changent

  // 1er paramètre : callback qui sera executé dès qu'une dépendence change
  // 2nd paramètre : tableau de variables, et cela va détecter si une des 
  // variables change ; si c'est le cas, il appelle le callback

  // Dans ce cas là, celà permettra d'éviter d'appeler le render
  // si on change aussi la valeur de l'input du Prénom ; 
  // ça ne l'appellera que quand on change le input du titre

  // Penser à nettoyer les effets qui ne sont plus utiles,
  // comme par exemple lorsque le composant est masqué
  // ( "removeEventListner" )
  useEffect(() => {
    document.title = title
  }, [title]);

  return <div className='vstack gap-2'>
    <Input
      placeholder="Modifier le titre"
      value={title}
      onChange={setTitle}
    />
    <Input
      placeholder="Prénom"
      value={firstname}
      onChange={setFirstname}
    />

      
      
  </div>

}

export default App
