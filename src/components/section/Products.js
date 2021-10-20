import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Product.css";
export class Products extends Component {
    static contextType = DataContext;
    render() {
        const { products } = this.context;

        return ( <
            div id = "product" > {
                products.map((product, index) => ( <
                    div className = "card"
                    key = { index } >
                    <
                    Link to = { `/product/${product.id}` } >
                    <
                    img src = { product.src }
                    alt = "helo" / >
                    <
                    /Link> <
                    div className = "context" >
                    <
                    h3 >
                    <
                    Link to = { `/product/${product.id}` } > { product.title } < /Link> <
                    /h3> <
                    span > $ { product.price } < /span> <
                    p > { product.description } < /p> <
                    button onClick = {
                        () => this.context.addCart(product.id) } >
                    Add to card <
                    /button> <
                    /div> <
                    /div>
                ))
            } <
            /div>
        );
    }
}

export default Products;