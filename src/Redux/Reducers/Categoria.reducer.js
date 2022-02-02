import { CATEGORIAS } from "../../Utils/Data/Categorias";
import React from "react";
import { SELECCIONAR_CATEGORIA } from "../Actions/Categoria.action";

// Seteo en el estado inicial del store el array DATA de CATEGORÍAS y preparo el Id seleccionado para guardar luego
const initialState = {
    categorias: CATEGORIAS,
    IdCategoriaElegida: null,
}

const CategoriaReducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECCIONAR_CATEGORIA:

            // Busco en el array por la categoría elegida enviada en el action
            const indice = state.categorias.findIndex(categoria => categoria.id === action.categoriaId);

            // si no la encuentra devuelve el estado actual
            if (indice === -1)
                return state

            // Sino, actualizo el estado del store y devuelvo
            return {
                ...state,
                IdCategoriaElegida: state.categorias[indice].id,
            }

        default:
            return state;
    }
}

export default CategoriaReducer;