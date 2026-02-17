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
    },
    {
      id: 1,
      name: "Melk",
      quantity: 2,
    }
  ]

  const [itemList, setItemList] = useState(shopList)
  const [addItem, setAddItem] = useState()

 
  
  return(
    <main>
      <h1>Handleliste</h1>
      <AddForm addItem={addItem} setAddItem={setAddItem} setItemList={setItemList} />
      <ShoppingList itemList={itemList} setAddItem={setAddItem} />
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


// function App() {
//   const [items, setItems] = useState([
//     { id: 1, name: "Melk", quantity: 2, purchased: false },
//     { id: 2, name: "Brød", quantity: 1, purchased: true }
//   ]);

//   const addItem = (name, quantity) => {
//     const newItem = {
//       id: Date.now(),
//       name,
//       quantity: Number(quantity),
//       purchased: false
//     };

//     setItems([newItem, ...items]);
//   };

//   const togglePurchased = (id) => {
//     setItems(
//       items.map(item =>
//         item.id === id
//           ? { ...item, purchased: !item.purchased }
//           : item
//       )
//     );
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) return;

//     setItems(
//       items.map(item =>
//         item.id === id
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   return (
//     <main>
//       <header>
//         <h1>Handleliste</h1>
//       </header>

//       <AddForm addItem={addItem} />

//       <ShoppingList
//         items={items}
//         togglePurchased={togglePurchased}
//         updateQuantity={updateQuantity}
//       />
//     </main>
//   );
// }

// export default App;


// import { useState } from 'react'
// import './App.css'
// import AddForm from './components/AddForm.jsx'

// function App() {

//   return (
//     <main>
//       <h1>Handleliste</h1>
//       <AddForm />
//     </main>
//   )
// }

// export default App
