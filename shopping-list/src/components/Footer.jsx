export default function Footer({ items }) {
  if (items.length === 0) return <footer className="stats">Shopping list is still empty!</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      There are a total of {totalItems} items on the list, {checkedItems} things bought ({percentage}%)
    </footer>
  );
}