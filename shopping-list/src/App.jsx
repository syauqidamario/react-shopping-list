import { useState } from "react";

const groceryItems = [
  {
    id: 1,
    name: "Powdered Coffee",
    quantity: 10,
    checked: true,
  },
  {
    id: 2,
    name: 'Sugar',
    quantity: 5,
    checked: true,
  },
  {
    id: 3,
    name: 'Mineral Water',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  return (
  <div className="app">
    <Header/>
    <Form/>
    <GroceryList/>
    <Footer/>
  </div>
  );
}

function Header(){
  return <h1>My Shopping List 📝</h1>
}

function Form(){

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e)
  {
    e.preventDefault();
    

    const newItem = { name, quantity, checked:false, id: Date.now() };
    console.log(newItem);
  }

  const quantityNo = [...Array(40)].map((_, i) => (
    <option value ={i+1} key={i + 1}>{i + 1}
    </option>

  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>What are we buying today?</h3>
        <div>
          <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>{quantityNo}</select>
          <input type="text" placeholder="Item names" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button>Add</button>
      </form>
  );
}

function GroceryList(){
  return (
    <>
  
    <div className="list">
        <ul>
          {groceryItems.map((item) => (
            <Item item={item} key ={item.id} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
      </>
  );
}

function Item({item}){
  return(
    <li key={item.id}>
             <input type="checkbox" />
             <span style={ item.checked ? { textDecoration:'line-through' }: {}}>
              {item.quantity} {item.name}
              </span>
             <button>&times;</button>
           </li>
  );
}

function Footer(){
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
}