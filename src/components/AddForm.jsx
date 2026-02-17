export default function AddForm({addItem, setAddItem, setItemList}){
  const inputChange = (e) => {
    const {name, value} = e.target

    setAddItem((prev) => ({...prev, [name]: value}))
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    const uniqId = crypto.randomUUID()
    setItemList((prev) => ([...prev, {id:uniqId,...addItem}]))
    console.log(addItem)
  }

  return (
    <form className="handleliste" onSubmit={handleClick}>
      <label htmlFor="vare-title">Vare</label>
        <input 
          name="vare"
          type="text" 
          placeholder="Egg..."
          onChange={inputChange}
        />

      <label htmlFor="amount">Antall</label>
        <input 
          type="number" 
          id="quantity" 
          min={1} 
          placeholder="2"
        />

      <button className="add-btn">Legg til vare</button>
    </form>
  )
}



// import { useState } from "react";

// function AddForm({ addItem }) {
//   const [product, setProduct] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
    
//     if (product === "" && quantity === "") {
//       setError("Du må fylle ut både varenavn og antall.");
//       return;
//     }

//     if (product === "") {
//       setError("Du må skrive inn navn på varen.");
//       return;
//     }

//     if (quantity === "") {
//       setError("Du må skrive inn antall.");
//       return;
//     }

//     addItem(product, quantity);

//     setProduct("");
//     setQuantity("");
//     setError("");
//   };

//   return (
//     <form className="addform" onSubmit={handleChange}>
//         <label htmlFor="addformtitle">Vare</label>
//         <input
//             type="text"
//             id="addformtitle"
//             placeholder="Egg..."
//             value={product}
//             onChange={(e) => setProduct(e.target.value)}
//         />
//         <label htmlFor="addformAntall">Antall</label>
//         <input 
//             type="number"
//             id="addformantall"
//             min={1}
//             value={quantity}
//             placeholder="0"
//             onChange={(e) => setQuantity(e.target.value)}
//         />
//         <button type="submit">Legg til vare</button>

//         {error && <p>{error}</p>}
//     </form>
//   )
// }

// export default AddForm;





//     // const handleChange = (e) => {
//         // Henter name og value fra input-feltet som trigget eventet
//         // name tilsvarer attributtet "name" i input/textarea
//         // value er det brukeren skriver inn
//         // const { name, value } = e.target
        
//         // Oppdaterer todo-state
//         // prev er forrige state
//         // ...prev kopierer alle eksisterende verdier
//         // [name]: value oppdaterer riktig felt (title eller content)
//     //     setTodo((prev) => ({
//     //         ...prev,
//     //         [name]: value
//     //     }))
//     // }

//     // const handleClick = (e)=>{
//     //     e.preventDefault()
//     //     const uniqId = crypto.randomUUID()
//     //     setTodoList((prev) => ([...prev, {id:uniqId,...todo}]))
//     //     console.log(todo)
//     // }