import { Input } from './components/forms/Input.jsx';
import { Checkbox } from './components/forms/Checkbox.jsx';
import { ProductRow } from './components/products/ProductRow.jsx';
import { ProductCategoryRow } from './components/products/ProductCategoryRow.jsx';
import { useState } from 'react';

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {
  const [search, setSearch] = useState('')
  const [showStockedOnly, setShowStockedOnly] = useState(false)

  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false
    }

    if (search && !product.name.includes(search)) {
      return false
    }

    return true
  })

  return <div className='container my-3'>
    <h1>PRODUCT LIST</h1>
      <SearchBar 
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly} 
      />
      <ProductTable products={visibleProducts}/>
  </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange}, search, onSearchChange) {
  return <div>
    <div className="mb-3">
      <Input 
        value={search}
        onChange={onSearchChange} 
        placeholder="Rechercher"
      />
      <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les produits en stock"
      />
    </div>
  </div>
}

function ProductTable({products}) {
  const rows = [] // On initie un tableau vide, qui représente les lignes
  let lastCategory = null // On initie une variable vide qui représente la dernière catégorie rencontrée
  
  // Pour chaque produit rencontré dans le tableau que l'on parcours...
  for (let product of products) {
    // Si la catégorie est différente de la dernière catégorie rencontrée...
    if (product.category !== lastCategory) { 
      // On pousse le tableau "rows" avec le composant "ProductCategoryRow" et la catégorie rencontrée (sans oublier la clé)
      rows.push(<ProductCategoryRow key={product.category} name={product.category}/>) 
    } 
    // On remplace la dernière catégorie par la nouvelle
    lastCategory = product.category
    // On pousse avec le composant "ProductRow" et on affiche le nom et le prix du produit
    rows.push(<ProductRow key={product.name} product={product}/>)
  }

  return <table className='table'>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>

    <tbody>
      {rows}{/* On affiche les lignes dans le DOM */}
    </tbody>
  </table>
  
}

export default App