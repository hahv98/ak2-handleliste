import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({itemList, setAddItem}){
return(
  <section className="flex-r">
    <ul>
      {itemList.map((item) => <ShoppingItem key={item.id} name={item.name} quantity={item.quantity} id={item.id} setAddItem={setAddItem} />)}
    </ul>
  </section>
)  
}




// import ShoppingItem from './ShoppingItem.jsx';

// function ShoppingList({ items, togglePurchased, updateQuantity }) {
//   return (
//     <section>
//       <ul>
//         {items.map(item => (
//           <ShoppingItem
//             key={item.id}
//             item={item}
//             togglePurchased={togglePurchased}
//             updateQuantity={updateQuantity}
//           />
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default ShoppingList;