import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Write tests', completed: false },
    { id: 4, text: 'Deploy project', completed: false }
  ]);

  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), 
      text: text,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
  };

  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }  
        : todo  
    ));
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Todo List</h1>
      
      
      <AddTodoForm onAdd={addTodo} />
      
      
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="p-3 border rounded-lg flex items-center justify-between">
            <div className="flex items-center flex-1">
              {/* Toggle button */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                  todo.completed 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-300 hover:border-green-400'
                }`}
              >
                {todo.completed && (
                  <span className="text-white text-xs">✓</span>
                )}
              </button>
              
              
              <span 
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
            </div>
            
            
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-3 px-2 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

     
      <div className="mt-6 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Total: {todos.length} | 
          Completed: {todos.filter(todo => todo.completed).length} | 
          Remaining: {todos.filter(todo => !todo.completed).length}
        </p>
      </div>
    </div>
  );
};

export default TodoList;