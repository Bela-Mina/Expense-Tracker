
import React from "react";

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.decription}</h2>
            <h3>{props.Risk}</h3>
        </div>
    )
}
export default Product;