import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPrice,minusPrice } from "../utils/cartSlice";

const CartItem = ({ name, defaultPrice, price, itemAttribute, imageId }) => {
  const [increment, setIncrement] = useState(1);
  //const [decrement, setDecrement] = useState(1);
  const dispatch = useDispatch();
  const handlePrice = (currprice) => {
    //console.log(currprice)
    dispatch(addPrice(currprice));
    //console.log(currprice)
  };
  const handleMinusPrice = (currprice) => {
    //console.log(currprice)
    dispatch(minusPrice(currprice));
    //console.log(currprice)
  };
  return (
    <>
      <div className="h-max  w-[320px] rounded-lg shadow-md  shadow-slate-300 m-3 p-2 flex ">
        <div className="w-auto">
          {itemAttribute.vegClassifier === "VEG" ? (
            <h2 className="font-bold text-green-700 m-2">
              {itemAttribute.vegClassifier}
            </h2>
          ) : (
            <h2 className="font-bold text-red-700 m-2">
              {itemAttribute.vegClassifier}
            </h2>
          )}
          <h1 className="font-bold m-2">{name}</h1>
          {defaultPrice === undefined ? (
            <h1 className="font-bold m-2">₹{price / 100}</h1>
          ) : (
            <h1 className="font-bold m-2">₹{defaultPrice / 100}</h1>
          )}
          {/* <h1>{increment}</h1> */}
          <div className="flex flex-row gap-3 m-2">
            <button
              className="bg-green-100  w-10 h-max text-2xl text-center rounded-md"
              onClick={() => {
                const minus = increment - 1;
                if (minus < 1) {
                  setIncrement(1);
                } else {
                  setIncrement(minus);
                }
                {defaultPrice === undefined ? (
                  handleMinusPrice(price/100)
                  // <h1 className="font-bold m-2">₹{increment * (price / 100)}</h1>
                ) : (
                  
                   handleMinusPrice(defaultPrice/100)
                  
                )}
               // handlePrice()
              }}
            >
              -
            </button>
            <h1 className="text-xl ">{increment}</h1>
            <button
              className="bg-green-100  w-10 h-max text-2xl  rounded-md"
              onClick={() => {
                const add = increment + 1;
                setIncrement(add);

                {defaultPrice === undefined ? (
                  handlePrice(price/100)
                  // <h1 className="font-bold m-2">₹{increment * (price / 100)}</h1>
                ) : (
                  
                   handlePrice(defaultPrice/100)
                  
                )}
              }}
            >
              +
            </button>
          </div>
          <h1 className="font-bold m-2 ">Final Price</h1>
          {defaultPrice === undefined ? (
            <h1 className="font-bold m-2">₹{increment * (price / 100)}</h1>
          ) : (
            <h1 className="font-bold m-2">
              ₹{increment * (defaultPrice / 100)}
            </h1>
          )}
        </div>
        <div className="flex flex-col justify-items-end justify-center">
          <img
            className=" rounded-lg shadow-md  shadow-slate-300 h-28 w-28 object-cover float-right"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
              imageId
            }
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
