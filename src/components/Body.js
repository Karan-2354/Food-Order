import { useState, useEffect } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useBody from "../utils/useBody";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [allRestraunts, setallRestraunts] = useBody();
  const [filteredRestraunts, setFilteredRestraunts] = useBody();
  const [Restraunts, setAllRestraunts] = useState(allRestraunts);

  //console.log(allRestraunts)

  //not render component (Early Return)
  if (!allRestraunts) return null;

  const online = useOnline();

  if (!online) {
    return <h1>🔴 offline, Please Check Your internet connection</h1>;
  }
  return allRestraunts.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-3 flex justify-center">
        <input
          type="text"
          className="block w-6/12 p-1 rounded-md border-0  text-gray-900  ring-1 ring-inset outline-none ring-orange-300  sm:text-sm sm:leading-6 shadow-lg"
          placeholder="search a restraunt"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="rounded-md w-max mx-3 bg-orange-400 p-1 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline"
          onClick={() => {
            //console.log("before Filter", restraunts);
            //need to be filter the data
            const data = filterData(searchInput, allRestraunts);
            //setAllRestraunts(data);
             setFilteredRestraunts(data);
            //console.log("After Filter", data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestraunts.length === 0 ? (
          <h1 style={{ color: "red" }}>No Restraunt Found!!</h1>
        ) : (
          filteredRestraunts.map((Restraunt) => {
            return (
              <Link
                to={"/restraunt/" + Restraunt.info.id}
                key={Restraunt.info.id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <RestrauntCard {...Restraunt.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
