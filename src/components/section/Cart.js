import React, { Component } from "react";
import { DataContext } from "../Context";
import Colors from "./Colors";
import "../css/Detail.css";
import "../css/Cart.css";

import { Link } from "react-router-dom";
export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }
    render() {
        const { cart, reduction, increase, removeDelete, total } = this.context;
        if (cart.length === 0) {
            return <h2 > Vui long chon san pham < /h2>;
        } else {
            return ( <
                > { " " } {
                    cart.map((item) => ( <
                        div className = "details"
                        key = { item.id } >
                        <
                        img src = { item.src }
                        alt = "hello" / >
                        <
                        div className = "box" >
                        <
                        div className = "row" >
                        <
                        h2 > { item.title } < /h2>{" "} <
                        span > $ { item.price * item.count } < /span>{" "} <
                        /div>{" "} <
                        p >
                        <
                        Colors color = { item.color }
                        />{" "} <
                        /p>{" "} <
                        p > { item.description } < /p> <p> {item.content} </p > { " " } <
                        div className = "amount" >
                        <
                        button className = "count"
                        onClick = {
                            () => reduction(item.id) } >
                        -
                        <
                        /button>{" "} <
                        span > { item.count } < /span>{" "} <
                        button className = "count"
                        onClick = {
                            () => increase(item.id) } >
                        +
                        <
                        /button>{" "} <
                        /div>{" "} <
                        /div>{" "} <
                        div className = "delete"
                        onClick = {
                            () => removeDelete(item.id) } >
                        <
                        b > X < /b>{" "} <
                        /div>{" "} <
                        /div>
                    ))
                } { " " } <
                div className = "total" > { /* <Link to="/payment"> Payment </Link> <h3> Total: $ {total} </h3> */ } <
                /div> <
                />
            );
        }
    }
}

export default Cart;