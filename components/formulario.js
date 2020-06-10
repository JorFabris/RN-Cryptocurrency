import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';


const Formulario = ({ monedaSelected,cryptoSelected,setMoneda,setCriptomoneda,setConsultarApi }) => {


    const [cryptoMonedas, setCryptoMonedas] = useState('');

    useEffect(() => {
        const getCryptos = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            // console.log(result.data.Data);

            setCryptoMonedas(result.data.Data);


        }
        getCryptos();
    }, []);



    //Almacena en el state la seleccion del usuario
    const obtenerMoneda = (moneda) => {
        setMoneda(moneda);
    }
    const obtenerCryptoMoneda = (cripto) => {
        setCriptomoneda(cripto);
    }
    //Funcion para cotizar la cripto moneda
    const cotizarCriptomoneda = () => {
        if (cryptoSelected.trim() == '' || monedaSelected.trim() == '') {
            showAlert();
            return;
        }
        console.log('Cotizando..');
        setConsultarApi(true);
    }

    //Funcion muestra alerta.
    const showAlert = () => {
        Alert.alert(
            'Error...',
            'Tenes que seleccionar las dos monedas',
            [
                { text: 'Entendido' },

            ]
        )
    }


    return (
        <View>
            <Text style={styles.titulos}>Monedas</Text>
            <Picker
                selectedValue={monedaSelected}
                onValueChange={moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item label="Seleccione una moneda" value="" />
                <Picker.Item label="Dolar EE.UU" value="USD" />
                <Picker.Item label="Peso Argentino" value="ARS" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.titulos}>Criptomoneda</Text>

            <Picker
                selectedValue={cryptoSelected}
                onValueChange={cripto => obtenerCryptoMoneda(cripto)}
            >
                <Picker.Item label="Seleccione una criptomoneda" value="" />
                {(cryptoMonedas) ? cryptoMonedas.map(crypto => (
                    <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
                )) : <Text>Cargando CryptoMonedas...</Text>}
            </Picker>

            <TouchableHighlight
                onPress={() => cotizarCriptomoneda()}
                style={styles.btnCotizar}>
                <Text style={styles.txtBtn}>Cotizar</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({



    titulos: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnCotizar: {
        backgroundColor: '#5e49e2',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,

    },
    txtBtn: {
        textTransform: 'uppercase',
        color: '#fff',
        fontFamily: 'Lato-Black'


    }

});


export default Formulario;
