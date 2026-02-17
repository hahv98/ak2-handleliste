export default function ShoppingItem({id, name, quantity, setItemList}){
  


  return(
    <article className="item-card">
      <input type="checkbox"/>
      <h3>{name}</h3>
    </article>
  )
}







// function ShoppingItem({ item, togglePurchased, updateQuantity }) {
//   return (
//     <li>
//       <label>
//         <input
//           type="checkbox"
//           checked={item.purchased}
//           onChange={() => togglePurchased(item.id)}
//         />
//         {item.name}
//       </label>

//       <input
//         type="number"
//         min="1"
//         value={item.quantity}
//         onChange={(e) =>
//           updateQuantity(item.id, Number(e.target.value))
//         }
//       />
//     </li>
//   );
// }

// export default ShoppingItem;