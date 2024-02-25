import { useState } from "react";
const Profile = (props) => {
  const [count,setCount] = useState(1);
  const [count2] = useState(1);
  return (
    <div>
      <h1>Profile</h1>
      <h3>Name : {props.name}</h3>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(2)}>Increment</button>
    </div>
  );
};

export default Profile;
