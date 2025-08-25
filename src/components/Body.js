import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { SEARCH_LOGO } from "../utils/constants";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Using mock data in place of API because of API issue.
  const fetchData = () => {
    setListOfRestaurants(resList);
  };

  /* API issue
  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );

    const json = await data.json();

    // setListOfRestaurants(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
        .info.id
    );
  };
  */

  function searchRestaurant() {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.name.toLowerCase().includes(searchText.toLowerCase());
    });
    if (filteredList) {
      setListOfRestaurants(filteredList);
    }
  }

  //Conditional Rendering (rendering on the basis of some condition)
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //using ternary operator for conditional rendering in a single statement
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              setListOfRestaurants(resList);
            }
          }}
          onKeyDown={(e) => e.key === "Enter" && searchRestaurant()}
        />
        <button className="search-button" onClick={searchRestaurant}></button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
