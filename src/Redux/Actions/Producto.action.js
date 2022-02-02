export const FILTRAR_PRODUCTOS = 'FILTRAR_PRODUCTOS';
export const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';

export const filtrarProductos = (id) => ({
    type: FILTRAR_PRODUCTOS,
    categoriaId: id
});

export const seleccionarProducto = (id) => ({
    type: SELECCIONAR_PRODUCTO,
    productoId: id
})