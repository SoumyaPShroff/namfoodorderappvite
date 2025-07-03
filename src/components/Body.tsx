import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Search from "./Search";
import data from "../utils/Data.json"  //data taken from Data.json file
import DropdownList from "./DropdownList"; //importing dropdown component
import "../styles/RestaurantCard.css"; //importing css for restaurant card
import "../styles/DropdownList.css"; //importing css for dropdown

const Body = () => {
    const resList = data.restoList;
    const [filteredResList, setFilteredResList] = useState(resList);
    const [searchText, setSearchText] = useState("");
    const [searchPlace, setsearchPlace] = useState("All");

    const handleFilterRes = (searchstring) => {
        if (!searchstring.trim()) {
            // If search text is empty or just spaces, reset to full list
            setFilteredResList(resList);
        } else {
            const searchRes = resList.filter(res => res.data.name.toLowerCase().includes(searchstring.toLowerCase()));
            setFilteredResList(searchRes);
        }
    }

    // Get unique places for the dropdown
    //spread operator is used to create a new array with unique places
    // Set is used to filter out duplicates - All is also included along with list of current items
    //const resList = [{ type: "restaurant", data: { place: "Bengaluru", name: "Meghana Foods" }},{type: "restaurant", data: {   place: "Mumbai",  name: "KFC"  }  },
    const uniquePlaces = ["All", ...new Set(resList.map(res => res.data.place))];
    //dropdown except as below
    //[{ place: "All" }, { place: "Bengaluru" }, { place: "Hyderabad" }, ...]
    const placesList = uniquePlaces.map(place => ({ place }));

    // Filter handler
    const handleFilterChange = (searchplace) => {
        setsearchPlace(searchplace);
        if (searchplace === "All") {
            setFilteredResList(resList);
        } else {
            const filtered = resList.filter(res => res.data.place === searchplace);
            setFilteredResList(filtered);
        }
    };

    return (
        <div className="body">
            <div>
                <br>
                </br>
            </div>
            <div style={{ marginBottom: "16px" }}>
                <label>Filter by Place: </label>
                <DropdownList
                    data={placesList}
                    labelKey="place"
                    valueKey="place"
                    onChange={(e) => handleFilterChange(e.target.value)}
                    selectedValue={searchPlace}
                    disabled={true}
                />

            </div>

            <div>
                <Search
                    onSearch={handleFilterRes}
                    placeholder="Search for restaurants..."
                />
            </div>

            <div className="res-container">
                {
                    filteredResList.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    )
                    )

                }

            </div>
        </div>
    );
};
export default Body;