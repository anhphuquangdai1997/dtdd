import React, { Component } from "react";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Detail from "./section/Detail";
import Payment from "./section/Payment";
import Products from "./section/Products";

export class Section extends Component {
    render() {
        return ( <
            section >
            <
            Route path = "/product"
            exact component = { Products }
            /> <
            Route path = "/product/:id"
            component = { Detail }
            /> <
            Route path = "/cart"
            component = { Cart }
            /> <
            Route path = "/payment"
            component = { Payment }
            /> <
            /section>
        );
    }
}

export default Section;