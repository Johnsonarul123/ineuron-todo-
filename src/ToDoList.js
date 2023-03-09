import React from 'react'


const ToDoList = (props) => {
    const list = props.text;
    // const id = props.removeItem;

    // console.log(id);
//    const remove = (id) =>{
     
//      console.log(id);
     
//    }

  
   
    
    return(
       
        list.map((e,index)=>{
            // const id = index;

            // to pass the index or the id to parent comp ,first put in the bracket since map has it 
            // and then give a callback function to onclick passs id there and the in the function in the app comp.

          console.log(index);
            return(
                <div className='list' >
                <li>{e}</li>
                <div className='buttons'>
                <button onClick={() => props.remove(index)}>x</button> 
                <button onClick={() => props.edit(index)}>Edit</button>
                </div>
                
                </div>
                
            )
        })
       

    
    )
        
        
       
    
}

export default ToDoList