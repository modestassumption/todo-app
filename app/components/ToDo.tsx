'use client';
import React from 'react'
import { useState } from 'react'
import { BookUp, TypeOutline, Save } from 'lucide-react';
import { on } from 'events';

function DoCard(){
  const [inputvalue,setinputValue] = useState('');
  const [items, setItems] = useState<{id: string; text: string; isEditing: boolean}[]>([]); 
  /* Next.JS has issues, so need to specify <string[]> cus array of strings*/
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const addTodo = () => {
    if (!inputvalue.trim()) return;
    setItems([...items, { id: Date.now().toString(), text: inputvalue, isEditing: false }]);
    setinputValue('');
  };

  const saveEdit = ( id:string, newText:string) => {
    setItems(items.map(item => item.id === id ? { ...item,text:newText , isEditing: false } : item));
  };

  const startEditing = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };
  const deleteTodo = (id:string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <main>
    <section className='flex justify-center'> 
    <div className='justify-center flex '>
      <BookUp size={40} /> &nbsp;
          <input
           id='Userinput'
           type='text' 
           placeholder='Add here' 
           value={inputvalue} 
           onChange={(e)=>setinputValue(e.target.value)}
           onKeyDown={(e)=>e.key=='Enter' && addTodo()}
           >
          </input> &nbsp;
    </div>
    <div className='items-center'>
        <button 
          className='btn btn-primary' 
          onClick={addTodo}>
          Add to list</button>
    </div>
    </section>
    <section className="mt-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-2 p-2 bg-green-400 text-black rounded">
            {editingId === item.id ? (
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                  className="border border-gray-300 rounded p-1"
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit(item.id, editText)}
                />
                <button
                  className="ml-2 bg-green-500 text-white p-1 rounded"
                  onClick={() => saveEdit(item.id, editText)}
                >
                  <Save />
                </button>
              </div>
          ) : (
              <div className="flex items-center justify-between w-full">
                <span className="flex-grow">{item.text}</span>
                <div>
                  <button
                    className="ml-2 bg-yellow-500 text-white p-1 rounded"
                    onClick={() => startEditing(item.id, item.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 bg-red-500 text-white p-1 rounded"
                    onClick={() => deleteTodo(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
export default DoCard

