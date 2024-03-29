import "./Main.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ImagesList from "../ImageList/ImageList";
import Choice from "./Choice/Choice";

import { getImages } from "../../requests/searches";
import IMAGES from "./images/index";
import homeIcon from "../../assets/home-icon.png";

// temporary import
const Main = () => {
    const [images, setImages] = useState([]);
    const [isChoosing, setIsChoosing] = useState(false);
    const [numImagesToSearch, setNumImagesToSearch] = useState(10);

    // will populate component with external images later
    const [imageChoices, setImageChoices] = useState();

    const handleImageRangeChange = (e) => {
        setNumImagesToSearch(e.target.value);
    }

    const searchImages = async (term, start, fileTypeOption) => {
        let newImages = await getImages(term, start, numImagesToSearch, fileTypeOption);

        if (newImages) {
            setImages((prev) => [...prev, ...newImages]);
        }
    }

    const displayChoices = () => {
        setTwoRandomChoices(IMAGES);
        setIsChoosing(true);
    }

    // useEffect(() => {
    //     displayChoices(IMAGES);
    // }, [])

    // temporarily uses local images
    const setTwoRandomChoices = (imagesPulled) => {
        let numImages = imagesPulled.length;
        
        let firstImageIndex = Math.floor(Math.random() * numImages);
        let secondImageIndex = Math.floor(Math.random() * numImages);

        //Make sure no duplicates
        while (secondImageIndex === firstImageIndex) {
            secondImageIndex = Math.floor(Math.random() * numImages);
        }

        let firstImage = imagesPulled[firstImageIndex]
        let secondImage = imagesPulled[secondImageIndex]

        setImageChoices([firstImage, secondImage]);
    }

    const makeChoice = (choiceID) => {
        let imageToAdd = imageChoices.find((image) => image.id === choiceID)
        
        setIsChoosing(false);
        setImages((prev) => [...prev, imageToAdd]);
    }

    const cancelChoice = () => {
        setIsChoosing(false);    
    }

    const deleteImage = (id) => {
        let newImages = images.filter((image) => {
            return image.id !== id;
        })
        setImages(newImages);
    }

    return (
        <div className="Main">
            <Link to="../"><img className="homeIcon" src={homeIcon} alt="home" /></Link>

            <div className="searchArea">
                <div id="imageRangeInput">
                    <label id="imageRangeLabel" htmlFor="numImages"># of images to search</label>
                    <div id="slider">
                        <p>1</p>
                        <input type="range" id="numImages" value={numImagesToSearch} min="1" max="10" step="1" onChange={handleImageRangeChange}/>
                        <p>10</p>
                    </div>
                </div>
                <SearchBar searchImages={searchImages} onDisplayChoice={displayChoices}/>
            </div>
            <ImagesList onDelete={deleteImage} images={images} />

            {isChoosing && <div className="choices">
                <Choice className="choice" imageChoices={imageChoices} onMakeChoice={makeChoice} onCancel={cancelChoice}/>
                <div className="overlay"></div>
            </div>}
        </div>
    )
}

export default Main;