import { useState } from 'react'

export const TaskCreator = (props) => {
    const [newTaskName, setNewTaskName] = useState('');

    /**
        * La función handleSubmit se llama cuando se envía el formulario. Evita la acción predeterminada del
        * formulario, que es recargar la página, y en su lugar alerta al usuario que el formulario ha sido
        * enviado
        * @param e - el objeto del evento
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createNewTask(newTaskName);
        localStorage.setItem("tasks", newTaskName);
        setNewTaskName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Save Task</button>
        </form>
    );
};

export default TaskCreator;

