import ResturantCard from "./ResturantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  
    console.log(json);
  
    // Update this index based on your response structure
    const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    setListOfResturant(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };

  if(listOfResturant.length ===0){
    return <Shimmer />
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
          }} />
          <button
          onClick={()=>{
            console.log(searchText);
            const filteredRestaurant= listOfResturant.filter(
              (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
              
            );
            setFilteredRestaurant(filteredRestaurant);

          }}
          >SEARCH</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfResturant(filterList);
          }}
        >
          TOP RATED RESTURANTS
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}
          >
          <ResturantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
