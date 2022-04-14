import React from "react";
import Image from "../images/ktty.jpg";
import imagesData from "../imagesData";


export default function Carousel() {

    const [image, setImage] = React.useState(`${Image}`)
    const [desc, setDesc] = React.useState("Click the button below :))")

    function imgChange() {
        const imgArray = imagesData.images
        const randomImg = Math.floor(Math.random() * imgArray.length)
        setImage(imgArray[randomImg].image)
        setDesc(imgArray[randomImg].description)
    }



    return (
        <div className="carousel">
            <div className="carousel--details">
                <img className="carousel--img" src={image}></img>
                <p className="carousel--desc">{desc}</p>
                <button onClick={imgChange} className="carousel-btn"> SHUFFLE </button>
            </div>
            <h3> Have a great year ahead, my Favorite Fish </h3>
        </div>
    )
}
