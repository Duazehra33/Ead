import React, { useState } from 'react';
import AppName from './AppName';
import './App.css';
import TodoItems from './todoItems';
import AddTodo from './AddTodo';
import Welcome from './welcome';

function App() {
  const [todoItems, setTodoItems] = useState([
    { name: 'Buy Milk', dueDate: '4/10/2023', isEditing: false },
    { name: 'Go to college', dueDate: '4/10/2023', isEditing: false },
    { name: 'Buy Chocos', dueDate: '4/10/2023', isEditing: false },
  ]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate, isEditing: false }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  };

  const handleEditItem = (index) => {
    const newTodoItems = todoItems.map((item, i) => i === index ? { ...item, isEditing: true } : item);
    setTodoItems(newTodoItems);
  };

  const handleSaveItem = (index, newName, newDate) => {
    const newTodoItems = todoItems.map((item, i) => 
      i === index ? { name: newName, dueDate: newDate, isEditing: false } : item
    );
    setTodoItems(newTodoItems);
  };

  return (
    <div className='container text-center'>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems 
        todoItems={todoItems} 
        onDeleteClick={handleDeleteItem} 
        onEditClick={handleEditItem}
        onSaveClick={handleSaveItem}
      />
    </div>
  );
}

export default App;
