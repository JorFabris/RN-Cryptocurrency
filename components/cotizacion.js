import React from 'react'

import { StyleSheet, Text, View } from 'react-native';



const Cotizacion = ({ resultado }) => {

  if (Object.keys(resultado).length == 0) return null;

  return (
    <View style={styles.resultadoCont}>
      <Text style={styles.texto}>
      Precio actual:{' '}
      
        <Text style={styles.span}> {resultado.PRICE}</Text>
      </Text>


      <Text style={styles.texto}>
      Precio más alto del dia: {' '}
        <Text style={styles.span}> {resultado.HIGHDAY}</Text>
      </Text>


      <Text style={styles.texto}>
      Precio más bajo del dia:{' '}
        <Text style={styles.span}> {resultado.LOWDAY}</Text>
      </Text>


      <Text style={styles.texto}>
      Variacion de las ult 24HS:{' '}
        <Text style={styles.span}> {resultado.CHANGEPCT24HOUR}%</Text>
      </Text>

      <Text style={styles.texto}>
      Ultima actualizacion:{' '}
        <Text style={styles.span}> {resultado.LASTUPDATE}</Text>
      </Text>

    </View>
  );
}



const styles = StyleSheet.create({

  resultadoCont: {
    backgroundColor:'#5e49e2',
    marginTop:20,
    padding:10,
    
  },
  texto: {
    color:'white',
    fontFamily:'Lato-Regular',
    fontSize:18,
    marginTop:7
    
    

  },
  precio: {

    
    

  },
  span: {
    fontSize:18,
    fontWeight:'bold',
    fontFamily:'Lato-Regular'

  }


});

export default Cotizacion;