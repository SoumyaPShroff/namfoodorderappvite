//we can also write , sending indiviual parameters like below - mulitple parameter kind
//const RestaurantCard = ({ resName, cuisine}) => {
//  const RestaurantCard = (props) => {
import "../styles/RestaurantCard.css"; // Importing CSS for restaurant card
import { Link } from 'react-router-dom';

const RestaurantCard = ({ resData }) => {

  return (
    <div className="res-card"
    >
      <Link
        to="/Aboutus"
        state={{ restaurant: resData }}
        style={{ textDecoration: 'none', color: 'inherit' }} // optional: removes underline and preserves style
      >
        <img className="res-logo" alt="res-logo" src={resData.data.reslogo} />
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisine.join(', ')}</h4>
        <h4>{resData.data.deliverytime}</h4>
        <p>{resData.data.place}</p>
        <h4>{resData.data.rating} stars</h4>
      </Link>
    </div>
  );
};
export default RestaurantCard;