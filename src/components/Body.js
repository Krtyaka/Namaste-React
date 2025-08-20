import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { SEARCH_LOGO } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [inputText, setInputText] = useState("");

  function searchRestaurant() {
    const filteredList = listOfRestaurants.filter((res) => {
      return res.name.toLowerCase().includes(inputText.toLowerCase());
    });
    if (filteredList) {
      setListOfRestaurants(filteredList);
    }
  }

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
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
