import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
//import store from "../utils/store";

const loggedUser = () => {
  return true;
};
export const Title = () => (
  <a href="/">
    <img
      className=" h-12 p-2"
      alt="logo"
      src="https://logosmarcas.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
    />
  </a>
);

const Header = () => {
  const [loggedCheck, setLoggedCheck] = useState(true);
  const cartItem = useSelector((store) => store.cart.items);
  //console.log(cartItem);
  return (
    <div className="flex justify-between  p-1 shadow-lg shadow-slate-300">
      <Title />
      <div className="flex">
        <ul className="flex py-3">
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <li className="px-3 font-semibold  hover:text-orange-400">Home</li>{" "}
          </Link>
          <Link
            to={"/about"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <li className="px-3 font-semibold  hover:text-orange-400">
              About us
            </li>{" "}
          </Link>
          <Link
            to={"/contact"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <li className="px-3 font-semibold  hover:text-orange-400">
              Contact
            </li>
          </Link>
          <Link
            to={"/cart"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <li className="px-3 font-semibold  hover:text-orange-400">
              Cart - {cartItem.length}
            </li>
          </Link>
          <Link
            to={"/instamart"}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <li className="px-3 font-semibold  hover:text-orange-400">
              Instamart
            </li>
          </Link>
        </ul>
        {loggedCheck ? (
          <button
            className="rounded-md  bg-orange-400 m-2 p-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setLoggedCheck(!loggedCheck);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="rounded-md  bg-orange-400 m-2 p-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setLoggedCheck(!loggedCheck);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
