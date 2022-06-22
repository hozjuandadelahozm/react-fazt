import { useState } from 'react'
import './App.css';

function App() {

  const [ newTaskName, setNewTaskName ] = useState()

  return (
    <div className="App">
      
      <form onSubmit={() => alert('submiting')}>
        <input
          type="text"
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Save Task</button>
      </form>

    </div>
  );
}

export default App;
