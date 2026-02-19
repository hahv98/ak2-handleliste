export default function ShoppingItem({id, name, quantity,check, updateQty, updateCheck}){
  
  const handleQtyChange = (e) =>{
    updateQty(id, e.target.value)
  }

  const handleCheckChange = (e) => {
    updateCheck(id, e.target.checked)
  }

  return(
    <article className="item-card">
      <input type="checkbox" checked={check} onChange={handleCheckChange}/>
      <h3>{name}</h3>
      <input className="list-input" type="number" min={1} value={quantity} onChange={handleQtyChange}/>
    </article>
  )
}