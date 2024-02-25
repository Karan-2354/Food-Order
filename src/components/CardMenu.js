//import { CardImg_url } from "../config";
//import { Card } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { addPrice } from "../utils/cartSlice";
import { message } from "antd";


const CardMenu = (object) => {
  const { name, defaultPrice, description, itemAttribute, imageId ,price} = object;
  const dispatch = useDispatch();
  const handleAddItem = (object) => {
    dispatch(addItem(object));
  };
 // const dispatch1 = useDispatch();
  const handlePrice = (currprice) => {
    message.config({
      top:500
    })
    message.success("Item Added successfully")
    dispatch(addPrice(currprice));
   
  };
  return (
    <div className="h-auto w-auto rounded-lg shadow-md  shadow-slate-300 m-3 p-2 flex ">
      <div className="w-[700px]">
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

        <h1 className="m-2 text-gray-500">{description}</h1>
      </div>
      <div className="flex flex-col  justify-center">
        <img
          className=" rounded-lg shadow-md  shadow-slate-300 h-28 w-28 object-cover float-right"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId
          }
        />
        <button
          className="z-10  -mt-6 rounded-md  p-1  text-sm font-semibold bg-white  text-green-600 shadow-lg shadow-gray-400 hover:shadow-slate-300 focus-visible:outline"
          onClick={() => {
            handleAddItem(object) 
            {defaultPrice === undefined ? (
              handlePrice(price/100)
            
            ) : (
              
               handlePrice(defaultPrice/100)
              
            )}
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default CardMenu;

/**
 * https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/
 */
