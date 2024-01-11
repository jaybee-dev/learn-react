import React from 'react' 
import ReactDOM from 'react-dom/client' // import de la librairie qui permet de brancher React au DOM
import App from './App.jsx'

// creatRoot prend en 1er paramètre quel élément HTML on va brancher notre noeud React
// 2ème paramètre fonction render() qui permet de rendre l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
