import React,{ useState} from "react";
import Todolist from './Todolist';
const App = () => {

  const[inputList, setinputList] = useState("");
  const [change, setchange] = useState(false)
  const[Items, setItems] = useState([]);

  //
  const[id, setid] = useState(0);


  const itemEvent =(event)=>{
    setinputList(event.target.value);

  };
 

  
  React.useEffect(() => {

    let data=localStorage.getItem('data')
    if(data!=null)
    {
      setItems(JSON.parse(data))
    }
    


    return () => {}
  }, [])


  const Additem =()=>{

    setItems((olditems) =>{
      localStorage.setItem("data",JSON.stringify([...olditems, inputList]))
      return [...olditems, inputList];
    });
    setinputList("");
    
    

  };
  const deleteitem=(id)=>{
   
    setItems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index !==id;
      });
    });
    
};




  const updateitem =(olditems,newval)=>{

    let arr=Items
    arr[id]=inputList
    
    setItems(arr)
    localStorage.setItem("data",JSON.stringify(arr))
    setinputList("")
    setchange(!change)
    
  };
 

  function takeid(id){
    
    setid(id)
    setinputList(Items[id])
    setchange(!change)

  }

  return<>
    <div className='main_div'>
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder={change?"Upadte Text":"Add a Item"}
        
        value={inputList}

        onChange={itemEvent}/>
        {
          change?<button onClick={updateitem}>  
          <i className="fa fa-edit"/> </button>:
          <button onClick={Additem}> + </button>
          
        }

        <ol>
          {/*<li> {inputList} </li>*/}
      
          {Items.map((itemval,index) => {
            return <Todolist 

            key={index}
            id={index}
            text={itemval}
            ondelete ={deleteitem}
            onupdate ={updateitem}
            takeid={takeid}
            />;
            
          } )}

        </ol>

      </div>
    </div>


    </>;
  
};

export default App;