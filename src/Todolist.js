import React from 'react';

const Todolist =({text,ondelete,onupdate,id,takeid})=>{
    
    return (
    <>
    <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true"onClick={()=>{ondelete(id);}}/>
        <i className="fa fa-edit" onClick={()=>{takeid(id)}} />
        <li>{text}</li>
    </div>
    </>
    );
};

export default Todolist;