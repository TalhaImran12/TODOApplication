
import './App.css';
import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList]= useState([]);

const addUserHandler =(uName, uAge)=>{
  setUsersList((prevList)=>{
    return [...prevList, {name:uName, age:uAge, key: Math.random().toString()*10}];
  });

};
  return (
  
    <div className="App">
     
        <AddUser addUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
