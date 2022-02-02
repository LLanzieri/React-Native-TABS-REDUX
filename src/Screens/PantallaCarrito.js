import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from "react";

import ItemCarrito from '../Components/ItemCarrito';
import { styles } from '../Styles/styles_PantallaCarrito';
import { useSelector } from 'react-redux';

const PantallaCarrito = () => {

    // Con un useSelector agarro del estado de la store solamente los objetos de CARRITOCOMPRAS
    const objetosEnCarrito = useSelector(state => state.carritoStore.carrito)

    const [total, setTotal] = useState(0);

    const calcularTotal = () => {
        let total = 0;
        for (let i = 0; i < objetosEnCarrito.length; i++) {
            total += (objetosEnCarrito[i].precio * objetosEnCarrito[i].cantidad)
        }
        setTotal(total);
    }

    const handlerOnConfirm = () => {
        console.warn("CONFIRMAR COMPRA");
    }

    const handlerDelete = (item) => {
        console.warn('Eliminar' + ' ' + item.id)
    }


    useEffect(() => {
        calcularTotal();
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>

            <FlatList
                style={styles.lista}
                data={objetosEnCarrito}
                renderItem=
                {
                    ({ item }) => (
                        <ItemCarrito obj={item} handlerDelete={handlerDelete} />
                    )
                }
            />
            <TouchableOpacity style={styles.containerTotal} onPress={() => handlerOnConfirm()}>
                <Text style={styles.textoTotal}>Confirmar compra: $ {total}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PantallaCarrito; 