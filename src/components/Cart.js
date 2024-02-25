//import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import CardMenu from "./CardMenu";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const price = useSelector((store) => store.cart.finalPrice);
  console.log(price);
  // const { name, price, description, itemAttribute, imageId } = cartItem[0];
  return (
    <>
      <h1 className="m-2 text-center text-4xl font-bold p-2">Your Cart</h1>
      <div className="flex">
        <div className="flex flex-wrap flex-col-2 w-[800px]">
          {cartItem.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <div>
          <div className=" w-max h-max rounded shadow-md m-5 p-5">
            <h1 className=" text-center text-2xl font-bold">Cart Summary</h1>
            <div className="flex">
              <h2 className="text-xl font-semibold m-3">Sub-Total</h2>
              <div className="text-xl font-semibold m-3 ml-[103px]">₹{price}</div>
            </div>
            <div className="flex">
              <h2 className="text-xl font-semibold m-2">Delivery Charge</h2>
              <h2 className="text-xl font-semibold m-2  ml-[53px]">₹{100}</h2>
            </div>
            <div className="flex">
              <h2 className="text-xl font-bold m-2">Total Price</h2>
              <h2 className="text-xl font-semibold m-2  ml-[100px]">₹{price + 100}</h2>
            </div>
            <button className="rounded-md mt-3 ml-[80px]  p-1 w-[150px] text-sm font-semibold bg-green-600  text-white shadow-lg shadow-gray-400 hover:shadow-slate-300 focus-visible:outline">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
