import { useState, useEffect } from "react";

const useBody = () => {
  //const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'}
      const response = {
          statusCode: 200,
          headers:headers,
          
      };
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await data.json();

      // Ensure the necessary properties exist before setting state
      const newRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

     // console.log(newRestaurants);
      setAllRestraunts(newRestaurants);
      // setFilteredRestraunts(newRestaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error.message);
      // You can add additional error handling here
    }
  }

  return [allRestraunts, setAllRestraunts];
};

export default useBody;
