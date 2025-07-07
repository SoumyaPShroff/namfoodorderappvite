
// Aboutus.jsx or Aboutus.tsx
import { useLocation } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";

const Aboutus = () => {
    const location = useLocation();
    const restaurant = location.state?.restaurant; // 👈 Correct way to access it

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
            <RestaurantDetails restaurant={restaurant} />
        </div>
    );
};

export default Aboutus;
