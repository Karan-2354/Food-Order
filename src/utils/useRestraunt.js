import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestraunt = (id) => {
  const [restaurant, setRestraunt] = useState(null);

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'}
      const response = {
          statusCode: 200,
          headers:headers,
          
      };
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    //console.log(json?.data);
    setRestraunt(json?.data?.cards[2]?.card?.card?.info);
  }
  return restaurant;
};

export default useRestraunt;
