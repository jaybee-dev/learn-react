import {Input} from './components/forms/Input'
import {Checkbox} from './components/forms/Checkbox'
import { ProductRow } from './components/products/ProductRow'


const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {
  return <div className='container my-3'>
    <h1>PRODUCT LIST</h1>
      <SearchBar/>
      <ProductTable/>
  </div>
}

function onChange() {

}

function SearchBar() {
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null} placeholder="Rechercher"/>
      <Checkbox id="stocked" checked={false} onChange={() => null} label="N'afficher que les produits en stock"/>
    </div>
  </div>
}

function ProductTable() {
  return <div>
    <ProductCategoryRow/>
    <ProductRow {PRODUCTS.map}/>
  </div>
}

function ProductCategoryRow() {
  // return {PRODUCTS.map(category => (<h2 key={category}>{category}</h2>))}
}

export default App
