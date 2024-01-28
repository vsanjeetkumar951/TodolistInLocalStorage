import React from "react";

function TodoItem({data,removeItem}) {
    
  return (
    <div>
      <ul>
       {
        data.map((el,index)=>{
            return(
                <li key={index}>
                    {el}
                    <button onClick={()=>removeItem(index)}>Delete</button>
                   
                </li>
            )
        })
       }
      </ul>
    </div>
  );
}

export default TodoItem;
