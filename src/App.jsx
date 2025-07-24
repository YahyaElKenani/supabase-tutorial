import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './supabase-client';

function App() {
  const [newTask, setNewTask] = useState({task: "", description: ""});
  const [tasks, setTasks] = useState([]);
  const handleSubmit = async (e) => { 
    e.preventDefault();
    const {error} = await supabase.from("tasks").insert([newTask]);
    if (error) { 
      console.error(error.message); 
      return;
    }
    displayTasks();
    setNewTask({title: "", description: ""});
  }
  
  const displayTasks = async () => { 
    const { error, data } = await supabase.from('tasks').select('*');
    if (error) { 
      console.error(error.message);
      return;
    }
    setTasks(data); 
  }

  useEffect(() => {
    displayTasks();
  }, [])

  const deleteTask = async (id) => { 
    const {error} = await supabase.from("tasks").delete().eq("id", id);
    if (error) { 
      console.error(error.message);
      return;
    }
    displayTasks(); 
  }

  useEffect(() => {console.log(tasks)}, [tasks])
  return ( 
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task Title' onChange={(e) => setNewTask((prevState) => ({...prevState, task: e.target.value}))}/>
        <input type="text" placeholder='Enter Task Description' onChange={(e) => setNewTask((prevState) => ({...prevState, description: e.target.value}))}/>
        <button type='submit'>Submit</button>
      </form>
      <div className='tasks'>
        { 
          tasks && 
          tasks.map((task) => <div key={task.id} className='task'>
            {task.task}
            <button onClick={() => deleteTask(task.id)}>delete</button>
            </div>)
        }
      </div>
    </>
  )
}

export default App
