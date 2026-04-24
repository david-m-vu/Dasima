import React, { useState } from "react";
import "./SearchBar.css";
import cardsIcon from "./images/cards-icon.jpg";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");
    const [fileType, setFileType] = useState("gif");
    const [start, setStart] = useState(1);

    let fileTypeOptions = {
        "Any Image": "any_image",
        ".gif": "gif"
    }

    const getFileTypeClass = (type) => {
        if (fileType === type) {
            return "active"
        } else {
            return "";
        }
    }

    const handleFileTypeChange = (fileTypeOption) => {
        setFileType(fileTypeOption);
    }

    const renderFileTypeOptions = () => {
        return Object.keys(fileTypeOptions).map((fileTypeOption) => {
            let type = fileTypeOptions[fileTypeOption];
            return <li className={getFileTypeClass(type)}
                key={type}
                onClick={() => handleFileTypeChange(type)}>
                {fileTypeOption}</li>
        })
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSearch = (e) => {
        if (term !== "" && (e.type === "click" || e.keyCode === 13)) {
            props.searchImages(term, start, fileType)
            setStart((prev) => prev + 10);
            setTerm("");
        }
    }

    return (
        <div className="SearchBar">
            <div className="search">
                <img className="cards" src={cardsIcon} alt="cards" onClick={() => props.onDisplayChoice()}/><p>OR</p>
                <input className="searchInput" type="text" onKeyDown={handleSearch} onChange={handleTermChange} value={term} placeholder="Search Here" />
                <button className="searchButton" onClick={handleSearch}>↪</button>
            </div>
            <div className="options">
                <ul>
                    {renderFileTypeOptions()}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar
