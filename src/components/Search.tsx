import { useState } from "react";
import "./RestaurantCard.css";

interface SearchProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const Search = ({ onSearch, placeholder }: SearchProps) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = () => {
        onSearch(searchItem);
    };

    return (
        <>
            <div style={{ textAlign: "left" }}>
                <input
                    className="input-search"
                    type="text"
                    onChange={(e) => setSearchItem(e.target.value)}
                    placeholder={placeholder}
                />
                {/* <button
              style={{
                marginLeft: "10px",
                backgroundColor: "#da9b26",
                color: "white",
              }}
              onClick={handleSearch}
            >
              Search
            </button> */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/54/54481.png"  
                    alt="Search"
                    onClick={handleSearch}
                    style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "10px",
                        cursor: "pointer",
                        verticalAlign: "middle"
                    }}
                />
            </div>

        </>
    )
}

export default Search