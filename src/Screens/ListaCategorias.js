import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ItemCategoria from "../Components/ItemCategoria";
import React from "react";
import { seleccionarCategoria } from "../Redux/Actions/Categoria.action";
import { styles } from '../Styles/styles_ListaCategorias';

const ImgCategorias = require('../../assets/images/opciones.png');

const ListaCategorias = ({ navigation }) => {

    // Agarro desde la store las diversas categorías que tengo
    const categorias = useSelector(state => state.categoriasStore.categorias);

    // Inicio el dispatch para poder luego llamar Actions
    const dispatch = useDispatch();

    const handlerOnSelectedItem = (item) => {

        // Cuando selecciono un ítem de la lista, mando a llamar a la action seleccionarCategoría encargada de setear el id seleccionado
        dispatch(seleccionarCategoria(item.id));

        // Navego a la pantalla 'ListaProductos'
        navigation.navigate('ListaProductos',
            {
                // Le paso a la pantalla los parámetros que espera bajo los identificadores 'TITULO' y 'COLOR'
                titulo: item.nombre,
                color: item.color
            }
        );
    }

    return (

        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgCategorias} />
                </View>

                <FlatList
                    style={styles.lista}
                    data={categorias}
                    renderItem=
                    {

                        ({ item }) =>
                        (
                            < ItemCategoria obj={item} OnSelectedItem={handlerOnSelectedItem} />
                        )
                    }
                    keyExtractor={item => item.id}
                />

            </View>
        </SafeAreaView >
    )
}

export default ListaCategorias;