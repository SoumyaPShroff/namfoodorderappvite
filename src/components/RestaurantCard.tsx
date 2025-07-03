//we can also write , sending indiviual parameters like below - mulitple parameter kind
//const RestaurantCard = ({ resName, cuisine}) => {
//  const RestaurantCard = (props) => {
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img className="res-logo"
        alt="res-logo"
        //below link work hardcoded
        //  src="https://carameltintedlife.com/wp-content/uploads/2022/02/vegetable-pulao-veg-pilaf-4.jpg"/>  
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