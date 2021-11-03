import { 
  useState,
  useEffect
} from 'react'
import styled from 'styled-components'
import { 
  BrowserRouter, 
  Switch, 
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import TestComponent from './TestComponent'

const TaskName = styled.span`
  color: blue;
  padding: 10px;
`

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  font-weight: bold;
`

function App() {
  
  const [ taskBox, setTaskBox ] = useState("")
  const [ tasks, setTasks ] = useState([])

  const addTask = () => {
    let data = {
      id: tasks.length + 1,
      taskName: taskBox,
      isCompleted: false
    }
    setTasks(prevState => [...prevState, data])
  }

  const toggleTaskCompleted = (id) => {
    let temp = tasks.map((task) => {
      return task.id === id ? {
        ...task, isCompleted: !task.isCompleted
      } : task
    })
    setTasks(temp)
  }

  const deleteTask = (id) => {
    let temp = tasks.filter((task)=>{
      return task.id !== id
    })
    setTasks(temp)
  }

  useEffect(()=>{
    setTaskBox("")
    console.log(tasks)
  }, [tasks])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          asdf
        </Route>
        <Route path="/home/test" >
          test homepage
        </Route>
        <Route path="/poll/:pollId" exact>
          with poll ID
          <TestComponent/>
        </Route>
        <Route path="/todolist">
          <div>
            <input 
              onChange={(e)=>setTaskBox(e.target.value)}
              placeholder="Enter task"
              value={taskBox}
            />
            <button onClick={addTask}>Add task</button>

            {tasks.map(task=>{
              return(
                <p>
                  <input 
                    type="checkbox" 
                    checked={task.isCompleted}
                    onChange={() => toggleTaskCompleted(task.id)}
                  />
                  <TaskName>
                    {task.taskName}
                  </TaskName>
                  <DeleteButton onClick={() => deleteTask(task.id)}>
                    Delete
                  </DeleteButton>
                </p>
              )
            })}
          </div>
        </Route>
        <Route path="/">
          <Redirect to="/todolist"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
