import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const header = ({title}) => {
  return (
    <View style={estilos.conteiner}>
      <Text>{title}</Text>
    </View>
  )
}

export default header

const estilos = StyleSheet.create({
    conteiner: {
        backgroundColor: "yellow",
        width: "100%",
        height: "10%",
        justifyContent: "center",
        alignContent: "center",
    }
})