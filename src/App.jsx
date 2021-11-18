import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { todoSelector, todoCurrentSelector } from './app/reducers/todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoTimer from './components/TodoTimer';
import './index.css'

function App() {
  const dispatch = useDispatch();
  const list = useSelector(todoSelector);
  const current = useSelector(todoCurrentSelector);

  return (
    <div className="flex flex-row h-screen">
      {/* Todo List */}
        {/* Todo Item */}
      <div className={`p-1 w-1/2 h-screen bg-gray-100 flex flex-col`}>
        <h1 className={`text-6xl`}>The List</h1>
        {list.length > 0 && 
        <div className={`flex-grow`}>
          <TodoList todoList={list}/>
        </div>}
        <TodoInput/>
      </div>
      <div className={`p-1 w-1/2 h-screen text-gray-100 bg-blue-400 flex flex-col`}>
        <h1 className={`text-6xl`}>The Clock</h1>
        {current && <TodoTimer current={current}/>}
      </div>
    </div>
  );
}

export default App;
