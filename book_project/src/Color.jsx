import React from 'react';
import { useColors } from "./ColorProvider";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";


export default function Color({id, title, color, rating}) {

    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{ height: 50, backgroundColor: color}}/>
            <StarRating selectedStars={rating} style={{backgroundColor: "lightblue"}} onRate={rating => rateColor(id, rating)}/>
        </section>
    )
}