import {useState, useRef, useEffect} from 'react';

import List from './List'; 
import Alert from './Alert';

function App() {
  
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorageItems());
  const [alert, setAlert] = useState({show:false, msg:'', type:''});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const beforeEditName = useRef(null);
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  }, [list]);

  useEffect(()=>{
    localStorage.setItem("grocery-items", JSON.stringify(list));
  }, [list]);

  function getLocalStorageItems(){
    const data = localStorage.getItem("grocery-items");
    if(data){
      return JSON.parse(data);
    }
    return [];
  }

  function handleFormSubmit(e){
    e.preventDefault();
    if(!name){
      showAlert(true, "Input cannot be empty", "Danger")
    }
    else if(name && isEditing){
      // deal edit later
      const editedList = list.map((item)=>{
        if(item.id === editId){
          return({
            ...item, title:name
          })
        }
        return item;
      })
      setList(editedList);
      setEditId(null);
      setIsEditing(false);
      setName('');
      showAlert(
        true,
        `${beforeEditName.current} changed to  ${name}`,
        "Success"
      )

    }
    else{
      setList([...list, {id:new Date().getTime().toString(), title:name}]);
      showAlert(true, `${name} has been added`, "Success");
      setName('');
      console.log(list);
    }
  }

  const showAlert = (show=false, msg='', type='')=>{
    setAlert({show, msg, type});
  }

  function clearList(){
    setList([]);
  }

  function removeItem(id){
    const itemToRemove = list.find(item=> item.id === id);
    const updatedList = list.filter((item)=>item.id !== id);
    setList(updatedList);
    showAlert(true, `${itemToRemove.title} has been removed`, "Danger");
  }


  const editItem=(id)=>{
    beforeEditName.current = list.find(item=>item.id === id).title;
    setEditId(id);
    setIsEditing(true);
    setName(beforeEditName.current);
  }
  return (
    <>
      <div className="grocery-container">
        {alert.show && <Alert {...alert} 
                              removeAlert={showAlert}
                              list={list}/>}
        <h2 className='heading'>Grocery Bud</h2>
        <form className="search-container" onSubmit={handleFormSubmit}>
          <input type="text" ref={inputRef} placeholder="e.g bread" value={name} onChange={(e)=>setName(e.target.value)} className="userInput"/>
          <button className="submitBtn" >{isEditing? "Edit":"Add"}</button>
        </form>
        {list.length > 0 && (
          <>
            <List list={list} removeItem={removeItem} editItem={editItem}/>
            <button className="clearListBtn" onClick={clearList}>Clear List</button>
          </>
        )}
        
      </div>
    </>
  );
}

export default App;
