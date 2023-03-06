import React from 'react'


const ToDoList = (props) => {
    const list = props.text;
   
    
    return(
       
        list.map((e)=>{
            return(
                <div className='list'>
                <li>{e}</li>
                </div>
                
            )
        })
       

    
    )
        
        
       
    
}

export default ToDoList