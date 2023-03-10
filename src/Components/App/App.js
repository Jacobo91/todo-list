import './App.css';
import {Form} from '../Form/Form';
import {List} from '../List/List';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  function addTask(newTask){
    setTasks(prevTasks => [newTask, ...prevTasks])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form
        addTask={addTask}
      />
      <ul>
        {
          tasks.map(task => 
              <List
                taskId={task.id}
                key={task.id}
                text={task.text}
                deleteTask={deleteTask}
              />
            )
        }
      </ul>
    </div>
  );
}

export default App;
