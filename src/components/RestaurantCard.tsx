//we can also write , sending indiviual parameters like below - mulitple parameter kind
//const RestaurantCard = ({ resName, cuisine}) => {
//  const RestaurantCard = (props) => {
import "../styles/RestaurantCard.css"; // Importing CSS for restaurant card

const RestaurantCard = ({ resData, onClick  }) => {
  return (
    <div className="res-card"  onClick={() => onClick(resData)}>
      <img className="res-logo"
        alt="res-logo"
        src=
        {
          resData.data.reslogo
        }
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisine.join(", ")}</h4>
      <h4>{resData.data.deliverytime}</h4>
      <p>{resData.data.place}</p>
      <h4>{resData.data.rating} stars</h4>
    </div>
  );
};
export default RestaurantCard;