import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { filtrarProductos, seleccionarProducto } from "../Redux/Actions/Producto.action";
import { useDispatch, useSelector } from "react-redux";

import ItemProducto from "../Components/ItemProducto";
import { styles } from '../Styles/styles_ListaProductos'

const ImgProductos = require('../../assets/images/estar.png');

const ListaProductos = ({ navigation }) => {

    // Agarro la categoría elegida guardada en la store
    const categoriaId = useSelector(state => state.categoriasStore.IdCategoriaElegida);

    // Agarro de la store los productos filtrados por la misma categoría
    const productosMismaCategoria = useSelector(state => state.productoStore.productosMismaCategoria);

    const dispatch = useDispatch();

    const handleOnSelectedProduct = (item) => {
        dispatch(seleccionarProducto(item.id));
        navigation.navigate('DetalleProducto',
            {
                //objetoElegido: item
            }
        )
    }

    // Necesito que cuando se cargue el componente, se cargue en el store los productos que coinciden con el id que se selecciono
    useEffect(() => {

        // Mando a llamar a la Action cuando se monta el componente
        dispatch(filtrarProductos(categoriaId));
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgProductos} />
                </View>

                <FlatList
                    style={styles.lista}
                    data={productosMismaCategoria}
                    renderItem=
                    {
                        ({ item }) =>
                        (
                            < ItemProducto obj={item} handleOnSelectedProduct={handleOnSelectedProduct} />
                        )
                    }
                    ListEmptyComponent=
                    {
                        <View style={styles.listaVacia}>
                            <Text style={styles.textoListaVacia}>¡ NO HAY PRODUCTOS QUE COINCIDAN CON ESTA CATEGORIA !</Text>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default ListaProductos;