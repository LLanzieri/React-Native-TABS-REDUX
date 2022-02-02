import { combineReducers, createStore } from "redux";

import CarritoReducer from "../Reducers/Carrito.reducer";
import CategoriaReducer from '../Reducers/Categoria.reducer';
import ProductoReducer from '../Reducers/Producto.reducer';
import UsuarioReducer from "../Reducers/Usuario.reducer";

const rootReducer = combineReducers({
    categoriasStore: CategoriaReducer,
    carritoStore: CarritoReducer,
    productoStore: ProductoReducer,
    usuarioStore: UsuarioReducer
})

export default createStore(rootReducer);