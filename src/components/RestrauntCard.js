import { Img_url } from "../config";


const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating , sla }) => {
 
  return (
    <div className=" rounded shadow-lg shadow-slate-300 w-60 m-4 p-3 overflow-hidden whitespace-nowrap text-ellipsis">
      <img className="w-60 h-60 object-cover"
        alt="food-image"
        src={
          Img_url +
          cloudinaryImageId
        }
      />
      <h2 className=" font-bold m-1 overflow-hidden whitespace-nowrap text-ellipsis">{name}</h2>
      <h3 className=" font-semibold m-1 overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(" , ")}</h3>
      <div className="flex space-x-7">
      <h4 className="rounded-md w-max m-1 bg-orange-400 p-1 text-sm font-semibold text-white shadow-sm focus-visible:outline">{avgRating}⭐</h4>
     <ul className="list-disc"><li className="rounded-md w-max m-1  p-1 text-sm font-semibold text-black">{sla.slaString}</li></ul>
      </div>
    </div>
  );
};

export default RestrauntCard;
