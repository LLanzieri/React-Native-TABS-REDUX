import { Button, Image, SafeAreaView, Text, View } from "react-native";

import React from "react";
import { styles } from '../Styles/styles_Detalle'
import { useSelector } from "react-redux";

const ImgDetalle = require('../../assets/images/evaluacion.png');

const Detalle = ({ navigation }) => {

    // Agarro de la store el producto elegido
    const productoElegido = useSelector(state => state.productoStore.productoElegido);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgDetalle} />
                </View>

                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>{productoElegido[0].nombre}</Text>
                    <Text style={styles.texto}>Descripción: {productoElegido[0].descripcion}</Text>
                    <Text style={styles.texto}>Peso: {productoElegido[0].peso}</Text>
                    <Text style={styles.texto}>$ {productoElegido[0].precio}</Text>
                </View>

                <Button title='Volver a Home' onPress={() => navigation.popToTop()} style={styles.boton} color='#bd9ff5' />

            </View>
        </SafeAreaView >
    )
}

export default Detalle;