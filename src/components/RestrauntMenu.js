import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_url } from "../config";
import { Shimmer } from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import CardMenu from "./CardMenu";
import useCard from "../utils/useCard";
import useItemCard from "../utils/useItemCards";
//import { Shimmer } from "./Shimmer";

const RestrauntMenu = () => {
  const { id } = useParams();
  // const [restraunt, setRestraunt] = useState(null);

  const restraunt = useRestraunt(id);
  const cards = useCard(id);
  const itemCard = useItemCard(id);

  //console.log(cards);
  // if (!cards) return null;
  //console.log(restraunt);
  return !restraunt ? (
    <Shimmer />
  ) : (
    <div className=" m-5">
      <div className="flex  justify-center  m-5">
        <div className="rounded-lg shadow-md  shadow-slate-300  items-center justify-center flex mr-10 p-3">
          <div className="flex flex-col p-3">
            <h1 className="font-bold text-2xl text-center">{restraunt.name}</h1>
            <h2 className="text-center text-gray-500">
              {restraunt.cuisines.join(" , ")}
            </h2>
            <h2 className="text-center text-gray-500">
              {restraunt.areaName + " , " + restraunt.sla.lastMileTravelString}
            </h2>
            <div className="flex space-x-6 justify-center m-3">
              <div className="flex">
                <i className="material-icons">access_time</i>
                <h4 className="text-l font-bold">{restraunt.sla.slaString}</h4>
              </div>
              <h4 className="text-l font-bold">
                {restraunt.costForTwoMessage}
              </h4>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="h-[240px]  w-[240px] object-cover shadow-md  shadow-slate-300 rounded-md"
            src={Img_url + restraunt.cloudinaryImageId}
          />
        </div>
      </div>
      {cards ? (
        <div>
          {cards.map((card) => {
            return (
              <div
                className="flex justify-center mx-56"
                key={card.card.info.id}
               
              >
                <CardMenu {...card.card.info} />
              </div>
            );
          })}
        </div>
      ) 
      // : itemCard ? (
      //   <div>
      //     {itemCard.map((card) => {
      //       return (
      //         <div
      //           className="flex justify-center mx-56"
      //           key={card.card.info.id}
      //         >
      //           <CardMenu {...card.card.info} />
      //         </div>
      //       );
      //     })}
      //   </div>
      // ) : (
        // <h1 className="text-4xl text-center font-bold">
        // </h1>
        :(
       <Shimmer />
      )}
      {}
    </div>
  );
};

export default RestrauntMenu;
