import React from "react";
import { useSelector } from "react-redux";
function Users() {
  const allUsers = useSelector((state) => state.users)
  const userCount = useSelector((state) => state.users.length)
  return (
    <div>
      <ul>
        Users!
        {allUsers.map(user => <li key={user.username}>{user.username} - {user.hometown}</li>)}
        {userCount}
      </ul>
    </div>
  );
}

export default Users;
