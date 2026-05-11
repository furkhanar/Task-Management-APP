import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const res = await axios.get("http://localhost:8080/tasks");

      setTasks(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD TASK
  const addTask = async () => {

    if (title.trim() === "") return;

    try {

      await axios.post("http://localhost:8080/tasks", {
        title
      });

      setTitle("");

      fetchTasks();

    } catch (err) {
      console.log(err);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await axios.delete(`http://localhost:8080/tasks/${id}`);

      fetchTasks();

    } catch (err) {
      console.log(err);
    }
  };

  // TOGGLE COMPLETE
  const toggleComplete = async (task) => {

    try {

      await axios.put(`http://localhost:8080/tasks/${task.id}`, {
        title: task.title,
        completed: !task.completed
      });

      fetchTasks();

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className={darkMode ? "app dark" : "app"}>

      <div className='container'>

        <div className='top-bar'>

          <h1>Task Manager</h1>

          <button
            className='theme-btn'
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

        </div>

        <div className='input-box'>

          <input
            type='text'
            placeholder='Enter your task...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            className='add-btn'
            onClick={addTask}
          >
            + Add Task
          </button>

        </div>

        {
          tasks.length === 0 ? (

            <h3 className='empty'>
              No Tasks Available
            </h3>

          ) : (

            tasks.map((task) => (

              <div className='task-card' key={task.id}>

                <div className='task-left'>

                  <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => toggleComplete(task)}
                  />

                  <span
                    className={
                      task.completed
                        ? 'task-title completed'
                        : 'task-title'
                    }
                  >
                    {task.title}
                  </span>

                </div>

                <div className='task-right'>

                  <small className='task-time'>
                    {new Date(task.created_at).toLocaleString()}
                  </small>

                  <button
                    className='delete-btn'
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))
          )
        }

      </div>

    </div>
  );
}

export default App;