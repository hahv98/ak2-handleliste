import { useState } from 'react'

export default function AddForm({addItem, setAddItem, setItemList}){
  const [error, setError] = useState("")

  const inputChange = (e) => {
    const {name, value} = e.target

    setAddItem((prev) => ({...prev, [name]: value}))
  }
  
  const handleClick = (e) => {
    e.preventDefault()

    if((!addItem?.name || addItem.name.trim() === "") && (!addItem?.quantity || addItem.quantity <= 0)){
      setError("Du må fylle inn både vare og antall!")
      return
    }
    if(!addItem?.name || addItem.name.trim() === ""){
      setError("Du må skrive inn en vare!")
      return
    }
    if(!addItem?.quantity || addItem.quantity <= 0){
      setError("Du må skrive inn et gyldig antall!")
      return
    }
    setError("")
    
    const uniqId = crypto.randomUUID()
    setItemList((prev) => ([{id:uniqId,...addItem}, ...prev]))
    console.log(addItem)

    setAddItem({name: "", quantity: ""})
  }

  return (
    <form className="handleliste" onSubmit={handleClick}>
      <label htmlFor="vare-title">Vare</label>
        <input 
          name="name"
          type="text" 
          placeholder="Egg..."
          value={addItem.name}
          onChange={inputChange}
        />

      <label htmlFor="amount">Antall</label>
        <input 
          type="number"
          name="quantity" 
          id="quantity" 
          min={1} 
          placeholder="2"
          value={addItem.quantity}
          onChange={inputChange}
        />
      {error && <p className='error-msg'>{error}</p>}
      <button className="add-btn">Legg til vare</button>
    </form>
  )
}

/* 
ChatGPT hjelp for feilmelding: 
https://chatgpt.com/share/699728dd-f6a0-8002-8f24-1dab23ea8ed6
*/