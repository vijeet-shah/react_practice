import React, { useState } from 'react'

function ListKey({ isDarkMode }) {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ])

  const handleAddItem = () => {
    const newItem = { id: items.length + 1, text: `Item ${items.length + 1}` }
    setItems([...items, newItem])
  }

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId))
  }

  return (
    <div className={isDarkMode ? 'clr-white' : 'clr-black'}>
      <h1>List Example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default ListKey
