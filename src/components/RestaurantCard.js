const RestaurantCard = ({ resData }) => {
  const { name, cuisine, avgRating, costForTwo, deliveryTime } = resData;
  return (
    <div className="restaurant-card">
      <img className="res-logo" src={resData.img} alt="res-logo" />
      <h3> {name} </h3>
      <h4> {cuisine.join(", ")}</h4>
      <h4> {avgRating} stars </h4>
      <h4> Rs.{costForTwo / 100} FOR TWO </h4>
      <h4> {deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;