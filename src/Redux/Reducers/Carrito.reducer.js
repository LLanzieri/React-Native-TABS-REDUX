import { CARRITOCOMPRAS } from "../../Utils/Data/CarritoCompras";
import React from "react";

const initialState = {
    carrito: CARRITOCOMPRAS
}

const CarritoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default CarritoReducer;