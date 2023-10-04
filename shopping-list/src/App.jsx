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

  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item)
  {
    setItems([...items, item]);
  }

  function handleDeleteItem(id)
  {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id)
  {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.
    checked}:{item})));
  }

  return (
  <div className="app">
    <Header/>
    <Form onAddItem={handleAddItem}/>
    <GroceryList item={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
    <Footer/>
  </div>
  );
}

function Header(){
  return <h1>My Shopping List📝</h1>
}

function Form({ onAddItem }){

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e)
  {
    e.preventDefault();

    if(!name) return;
    

    const newItem = { name, quantity, checked:false, id: Date.now() };

    onAddItem(newItem);

    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNo = [...Array(40)].map((_, i) => (
    <option value ={i+1} key={i + 1}>{i + 1}
    </option>

  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>What are we buying today?</h3>
        <div>
          <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>{quantityNo}</select>
          <input type="text" placeholder="Item names" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button>Add</button>
      </form>
  );
}

function GroceryList({items, onDeleteItem, onToggleItem}){
  return (
    <>
  
    <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key ={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Arrange based on input arrangement</option>
          <option value="name">Arrange based on item names</option>
          <option value="checked">Arrange based on checklist</option>
        </select>
        <button>Clear List</button>
      </div>
      </>
  );
}

function Item({item, onDeleteItem, onToggleItem }){
  return(
    <li key={item.id}>
             <input type="checkbox" checked={item.checked} onChange={()=>onToggleItem(item.id)} />
             <span style={ item.checked ? { textDecoration:'line-through' }: {}}>
              {item.quantity} {item.name}
              </span>
             <button onClick={()=>onDeleteItem(item.id)}>&times;</button>
           </li>
  );
}

function Footer(){
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
}