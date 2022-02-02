import React from "react";
import { USUARIO } from "../../Utils/Data/Usuario";

const initialState = {
    usuario: USUARIO
}

const UsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default UsuarioReducer;