
// Aboutus.jsx or Aboutus.tsx
import {  useLocation, useNavigate } from "react-router-dom";
import RestaurantDetailsGrid from "./RestaurantDetailsGrid";

const Aboutus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const restaurant = location.state?.restaurant; // 👈 Correct way to access it
    console.log("About us", restaurant);

    if (!restaurant) {
        return (
            <div>
                {/* <h1>About Us</h1>
            <p>We are a team of passionate food lovers dedicated to bringing you the best online food ordering experience.</p> */}
                <p>No restaurant selected.</p>
                <button onClick={() => navigate("/")}>Back</button>
            </div>
        );
    }

    return (
        <div>
            <RestaurantDetailsGrid restaurant={restaurant} />
        </div>
    );
};

export default Aboutus;
