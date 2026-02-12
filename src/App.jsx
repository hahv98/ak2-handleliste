import { useState } from 'react';
import AddForm from './components/AddForm.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import './App.css'


function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, purchased: false },
    { id: 2, name: "Brød", quantity: 1, purchased: true }
  ]);

  const addItem = (name, quantity) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      purchased: false
    };

    setItems([newItem, ...items]);
  };

  const togglePurchased = (id) => {
    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, purchased: !item.purchased }
          : item
      )
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;

    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <main>
      <header>
        <h1>Handleliste</h1>
      </header>

      <AddForm addItem={addItem} />

      <ShoppingList
        items={items}
        togglePurchased={togglePurchased}
        updateQuantity={updateQuantity}
      />
    </main>
  );
}

export default App;


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
