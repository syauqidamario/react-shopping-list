export default function Footer({items}){

      if(items.length === 0) return <footer className="stats">Shopping list still empty!</footer>
    
      const totalItems = items.length;
      const checkedItems = items.filter((item) => item.checked).length;
      const percentage = Math.round((checkedItems / totalItems) * 100);
    
      return <footer className="stats">There are {totalItems} item(s) on the shopping list,{checkedItems} has been bought ({percentage}%)</footer>
}