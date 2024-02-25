import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is a Namste React Course🚀</p>
      <Profile name={"Karan"} />
    </div>
  );
};

export default About;
