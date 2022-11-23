import React,{useState} from "react";
import Card from '../UI/Card';
import Button from "../UI/Button";
import './AddUser.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const [enteredUserName,setEnteredUserName]= useState('');
  const [enteredAge, setEnteredAge]= useState('');
  const [error, setError]= useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please enter a valid namge and age (non-empty values).'
      });
      return;
    }
    if(+enteredAge<1){
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age (>0).'
      })
      return;
    }
    
    props.addUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  

  const userNameHandler=(event)=>{
    setEnteredUserName(event.target.value);
  }
  const ageHandler=(event)=>{
    setEnteredAge(event.target.value);
  }

  const errorHandler =()=>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className='input'>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={userNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageHandler}/>
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
