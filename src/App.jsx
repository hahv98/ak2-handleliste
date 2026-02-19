import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'

function App() {
 const shopList = [
    {
      id: 0,
      name: "Egg",
      quantity: 1,
      check: true
    },
    {
      id: 1,
      name: "Melk",
      quantity: 2,
      check: false
    }
  ]

  const [itemList, setItemList] = useState(shopList)
  const [addItem, setAddItem] = useState({name: "", quantity: ""})

  const updateQty = (id, newQuantity) => {
    setItemList(prevList => 
      prevList.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }
  const updateCheck = (id, newCheck) => {
    setItemList(prevList => 
      prevList.map(item => 
        item.id === id ? { ...item, check: newCheck } : item
      )
    )
  }

 
  
  return(
    <main>
      <h1>Handleliste</h1>
      <AddForm addItem={addItem} setAddItem={setAddItem} setItemList={setItemList} />
      <ShoppingList itemList={itemList} setAddItem={setAddItem} updateQty={updateQty} updateCheck={updateCheck} />
    </main>
  )
}

export default App
/* 
Youtube video brukt til inspirasjon/hjelp:
https://www.youtube.com/watch?v=9wiWzu_tRB0&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ&index=15&t=310s

Chat med Google Gemini: 
https://gemini.google.com/share/d8637470f2de 

*/