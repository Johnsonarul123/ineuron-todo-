import './App.css';
import { useState } from 'react';

// import Card from './Card'
import ToDoList from './ToDoList';


// todoList= {todoList}
function App() {
  const [todo, setTodo] = useState("")
  const [todoList, settodoList] = useState([])

  const handleChange =(e)=>{
    e.preventDefault();
     settodoList([todo, ...todoList])
      setTodo("")
     return 
  }

  const remove = (index) =>{
     
    // The filter is not working help me out with this
    settodoList(todoList.filter((item) => item !== todoList[index]));
    console.log(settodoList);
  }

  const edit = (index) =>{

    alert("Arul-"+index);
  }
  console.log(todoList);
  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Todo</h1>
      
      <form >
         <h1> Todo </h1>

          <input value={todo} onChange={(e)=>{setTodo(e.target.value
            )}} ></input>
         <button onClick={handleChange} type='submit' className='submit-btn'>submit
            </button>
      </form>
       
        
      </header>
      
          <ToDoList edit={edit} remove={remove} text= {todoList}  /> 
        
        
      
      
     
    </div>
  );
}

export default App;
// 1. User should be able to create a new todo
// 2. User should be able to view all his created todo
// 3. User should be able to edit his existing todo
// 4. User should be able to delete his existing todo