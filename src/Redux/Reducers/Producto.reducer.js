import { FILTRAR_PRODUCTOS, SELECCIONAR_PRODUCTO } from "../Actions/Producto.action";

import { PRODUCTOS } from "../../Utils/Data/Productos";
import React from "react";

const initialState = {
    productos: PRODUCTOS,
    productosMismaCategoria: [],
    productoElegido: null
}

const ProductoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FILTRAR_PRODUCTOS:

            // Seteo un array con los productos que tienen la misma categoría que la categoría elegida enviada en la info de la action
            return {
                ...state,
                productosMismaCategoria: state.productos.filter(prod => prod.categoria === action.categoriaId)
            }

        case SELECCIONAR_PRODUCTO:

            // Seteo el producto elegido buscando por el id enviado en la info de la action
            return {
                ...state,
                productoElegido: state.productosMismaCategoria.filter(prod => prod.id === action.productoId)
            }

        default:
            return state;
    }
}

export default ProductoReducer;