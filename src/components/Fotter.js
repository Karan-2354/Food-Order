import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="text-red-900 font-bold m-10 p-10 ">
      This site is created by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
