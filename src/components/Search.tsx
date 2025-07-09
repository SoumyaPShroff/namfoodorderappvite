import { useState } from "react";
import "../styles/RestaurantCard.css";

interface SearchProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const Search = ({ onSearch, placeholder }: SearchProps) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = () => {
        onSearch(searchItem);
        //like search
        // onSearch(searchItem.toLowerCase().trim());
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