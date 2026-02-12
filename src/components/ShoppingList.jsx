import ShoppingItem from './ShoppingItem.jsx';

function ShoppingList({ items, togglePurchased, updateQuantity }) {
  return (
    <section>
      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            togglePurchased={togglePurchased}
            updateQuantity={updateQuantity}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;