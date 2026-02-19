import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({itemList, setAddItem, updateQty, updateCheck}){
return(
  <section className="flex-r">
    <ul>
      {itemList.map((item) => 
      <ShoppingItem 
      key={item.id} 
      id={item.id} 
      name={item.name} 
      quantity={item.quantity} 
      setAddItem={setAddItem} 
      check={item.check}
      updateQty={updateQty}
      updateCheck={updateCheck} />)}
    </ul>
  </section>
)  
}

/* Checkbox funksjon ble gjort i samarbeid med medelev Ole */