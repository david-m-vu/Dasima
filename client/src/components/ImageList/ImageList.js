import React from "react";
import "./ImageList.css";
import Image from "../Image/Image.js";

const ImageList = (props) => {

    return (
        <div className="ImagesList">
            {props.images.map((image) => {
                return <Image image={image} id={image.id} key={image.id} onDelete={props.onDelete}/>
            })}
        </div>
    )
}

export default ImageList;