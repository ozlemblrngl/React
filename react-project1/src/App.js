import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const clientInput = (event) => { 
    setTask(event.target.value);
  }

  const addTask = () => {
    if (task !== '') { 
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  useEffect(() => { 
    console.log(" ", tasks);
  }, [tasks]);

  return (
    <>
      <div className="App">
        <h1>To Do List</h1>
        <div>
          <input 
            type="text" 
            value={task}
            onChange={clientInput}
          /> 
          <br/>
          <br/>
          <button onClick={addTask}>Ekle</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t} <button>X</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
