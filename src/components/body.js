import React from "react";
import Header from "./header";
import Note from "./Note";
import Carousel from "./carousel";
import Footer from "./footer";


export default function body() {
    return(
        <div className="alt--body">
            <div>
                <Header/>
                <Note/>
                <Carousel/>
                <Footer/>
            </div>
        </div>
    )
}

