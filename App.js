/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,

} from 'react-native';

import axios from 'axios';

import Header from './components/header';
import Cotizacion from './components/cotizacion';
import Fromulario from './components/formulario';



const App = () => {

  const [monedaSelected, setMoneda] = useState('');
  const [cryptoSelected, setCriptomoneda] = useState('');


  const [consultarApi, setConsultarApi] = useState(false);
  const [cargando,setCargando] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const getCotizacion = async () => {
      if (consultarApi) {
        setCargando(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${monedaSelected}`;
        const result = await axios.get(url);
        setCargando(false);

        setResultado(result.data.DISPLAY[cryptoSelected][monedaSelected]);
        setConsultarApi(false);

      }
    }
    getCotizacion()
  }, [consultarApi]);

  const componente = cargando ? <ActivityIndicator size='large' color='#5E49E2' /> : <Cotizacion resultado={resultado}/>


  return (
    <>
      <ScrollView bouncesZoom={true} alwaysBounceVertical={true} showsVerticalScrollIndicator={false}>

        <Header />


        <View >
          <Image
            style={styles.ImgCrypto}
            source={require('./assets/img/cryptomonedas.png')}
          />
        </View>

        <View style={styles.contenedor}>
          <Fromulario
            monedaSelected={monedaSelected}
            cryptoSelected={cryptoSelected}
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            setConsultarApi={setConsultarApi}
          />
        </View>

        <View style={{marginTop:30}}>
        {componente}
        </View>


  
        

      </ScrollView>


    </>
  );
};

const styles = StyleSheet.create({


  ImgCrypto: {
    height: 150,
    width: '100%',
  },

  contenedor: {
    marginHorizontal: '2.5%'
  },


});

export default App;
