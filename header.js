import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
            <View style={css.view}>
                <Text style={css.text}>
                   Pocket Dicitionary App 
                </Text>
            </View>
        )
    }
}

const css = StyleSheet.create({
    view:{
      backgroundColor:'#F54748',
      justifyContent:'center',
      alignItems:'center',
      
    },

    text:{
        color:'white',
         fontWeight:'bold',
         padding:10,
         fontSize:50,
         fontFamily:'YELLOWTAIL',
    },
})