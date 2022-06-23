import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";

function App() {
  const [taskItems, settaskItems] = useState([
    { name: "mi primer tarea", done: true },
    { name: "mi segunda tarea", done: true },
    { name: "mi tercer tarea", done: true },
  ]);

  return (
    <div className="App">
      <TaskCreator/>

      <table>
        <thead>
          <tr>
            <th> Tasks </th>
          </tr>
        </thead>
        <tbody>
          {
            taskItems.map((task) => (
              <tr>
                {task.name}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
