import React from 'react';

function TodoItems({ todoItems, onDeleteClick, onEditClick, onSaveClick }) {
  return (
    <ul className="list-group">
      {todoItems.map((item, index) => (
        <li key={index} className="list-group-item">
          {item.isEditing ? (
            <div>
              <input 
                type="text" 
                defaultValue={item.name} 
                id={`name-${index}`} 
              />
              <input 
                type="date" 
                defaultValue={item.dueDate} 
                id={`date-${index}`} 
              />
              <div className="btn-container">
                <button 
                  onClick={() => onSaveClick(index, document.getElementById(`name-${index}`).value, document.getElementById(`date-${index}`).value)}
                  className="btn btn-primary"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div>
              <span>{item.name} - {item.dueDate}</span>
              <div className="btn-container">
                <button 
                  onClick={() => onEditClick(index)}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDeleteClick(item.name)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
