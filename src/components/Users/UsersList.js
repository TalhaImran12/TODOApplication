import React from "react";
import Card from "../UI/Card";
import './UsersList.css';

const UsersList = (props) => {
  return (
   <Card className='users'>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
      </Card>
  );
};

export default UsersList;
