import { Image, SafeAreaView, Text, View } from 'react-native'

import React from "react";
import { styles } from '../Styles/styles_Configuracion'
import { useSelector } from 'react-redux';

const ImgUser = require('../../assets/images/user.png');

const Configuracion = () => {

    // Con un useSelector agarro del estado de la store solamente los objetos de USUARIO
    const perfil = useSelector(state => state.usuarioStore.usuario);

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.imagen}>
                <Image source={ImgUser} />
            </View>
            <View style={styles.infoUsuario}>
                <Text style={styles.texto}>DNI: {perfil.dni}</Text>
                <Text style={styles.texto}>Nombre: {perfil.nombre}</Text>
                <Text style={styles.texto}>Apellido: {perfil.apellido}</Text>
                <Text style={styles.texto}>Email: {perfil.email}</Text>
                <Text style={styles.texto}>Teléfono: {perfil.telefono}</Text>
                <Text style={styles.texto}>Celular: {perfil.celular}</Text>
                <Text style={styles.texto}>Domicilio: {perfil.domicilio}</Text>
            </View>

        </SafeAreaView>
    )
}

export default Configuracion; 