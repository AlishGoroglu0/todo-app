import { useState } from 'react'
import './App.css'



let InitialTasks = [
    {Id : 0 , Task: "Test"},
    {Id : 1 , Task: "test2"},
    {Id : 2 , Task: "test3"} 
  ];

function App() {
  
  
  const [selectedTask , setSelectedTaskID] = useState(null);
  const [Tasks , setTasks] = useState(InitialTasks)
  const [Taskinput , setTaskinput] = useState('')


  function HandleRemove() {
  if (selectedTask === null) {
    console.log("Select a task to delete!")
    return;
  }  
    const NewTaskState = Tasks.filter(task => task.Id !== selectedTask);
    setTasks(NewTaskState)
    setSelectedTaskID(null) 
  }

  function Handleclear() {
    setTasks([]);
    
  }


  function HandleAdd(e) {
    e.preventDefault();
    if (Taskinput.trim() === '') {
      console.log('Please input task')
      return;
    }
    
    const newID = Tasks.length > 0 ? Math.max(...Tasks.map(task => task.Id)) + 1 : 0;
   
    const newTask = {
    Id: newID,
    Task: Taskinput.trim()
  }
   
  setTasks([...Tasks,newTask]);

  setTaskinput('');


  }
  


const handleselection = (Id) =>{

  setSelectedTaskID(Id)
  console.log(`Selected ID ${Id}`)
};

  return (
    <>
    <section className='App'>
      <header className='app-title'>
        <h1>Welcome To My React APP</h1>
      </header>
      <main className='app-task-board-container'>
        <div className='app-task-list'>
          <ul className='app-tasks'>
            {
              Tasks.map((item) =>(
                <li key={item.Id}
                className={item.Id === selectedTask ? `selected` : ``}
                onClick={() => handleselection(item.Id)}>
                  {item.Task}
                </li>
              ))
            }

          </ul>
        </div>
        <div className='app-input-container'>
          <form>
            <input type="text" className='task-input' aria-label='Task write area'
            value={Taskinput} onChange={(e) => setTaskinput(e.target.value)}
            />
          </form>
        </div>
        <div className='app-button-container' aria-label='task List'>
          <button className='app-button-add' aria-label='Add Task'
          onClick={HandleAdd}
          >
            <span className='button-text-add'>Add</span></button>
          <button className='app-button-remove' aria-label='Remove Task'
          onClick={HandleRemove}
          >
            <span className='button-text-remove'>Remove</span></button>
          <button className='app-button-clear' aria-label='Clear Task'
          onClick={Handleclear}
          >
            <span className='button-text-clear'>Clear</span></button>
        </div>
        </main>
        <footer>
          <p>This app is my first react app. I'm a zero to hero self learner and I hope I can learn more.</p>
        </footer>
        </section>
    </>
  )
}

export default App
