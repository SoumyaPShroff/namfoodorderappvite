// RestaurantDetailsGrid.jsx
import React from "react";
import "../styles/Grid.css";

const RestaurantDetails = ({ restaurant }) => {
  if (!restaurant) return null;
  
  return (
    <div className="details-grid">
      <div className="image">
        <img src={restaurant.data.reslogo}/> 
        <h2>{restaurant.data.name}</h2>
        <p><strong>Place:</strong> {restaurant.data.place}</p>
        <p><strong>Rating:</strong> {restaurant.data.rating}</p>
        <p><strong>Delivery Time:</strong> {restaurant.data.deliverytime}</p>
        <p><strong>Cuisines:</strong> {restaurant.data.cuisine.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
