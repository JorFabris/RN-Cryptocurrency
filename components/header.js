import React from 'react'

import { Text,StyleSheet,Platform } from 'react-native';



const Header = () =>(
    <Text style={styles.encabezado}>Criptomonedas</Text>
);

const styles = StyleSheet.create({

    encabezado:{
        paddingTop:Platform.OS === 'ios' ? 50 : 20,
        fontFamily:'Lato-Black',
        backgroundColor:'#5e49e2',
        paddingBottom:10,
        textAlign:'center',
        textTransform:'uppercase',
        color:'white',
        fontSize:20,
        marginBottom:30
        
    
        
    }

});

export default Header;