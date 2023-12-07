import { useState } from "react-native"
import { View, TextInput, Button, StyleSheet, FlatList} from "react-native"
import uuid from 'react-native-uuid'

const Libro = () =>{

  const [ newTitleProduct, setNewTitleProduct] = useState ("")
  const [ newProductPrice, setNewProductPrice] = useState ("")
  const [products, setProducts] = useState ([])
  
  const handlerAddProduct = () => {
    const newproduct = {
      id : uuid.v4(),
      title: newTitleProduct,
      price: newProductPrice,
    }
    setProducts (current => [...current,newproduct])
    setNewTitleProduct ("")
    setNewProductPrice ("")
  }
  

  return <View style={estilos.fondo}>
              <View style = {estilos.barraSup}>
                <TextInput style = {estilos.buscador}
                placeholder="Producto"
                onChangeText={(t)=> setNewTitleProduct (t)}
                />
                <TextInput style = {estilos.buscador}
                placeholder="Precio"
                onChangeText={(t)=> setNewProductPrice (t)}
                />
                <Button title = "ADD" onPress={handlerAddProduct}/>
              </View>
              <View style={estilos.listContainer}>
                <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({item}) => <View style ={estilos.cardProduct}>
                <Text>{item.title}</Text>
                <Text>{item.price} $</Text>
                <Button title="DEL"/>
              </View>}
                />
              </View>
              
         </View>
         
}

const estilos = StyleSheet.create ({
  fondo: {
    backgroundColor : "red",
    flex : 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: "10%",
  },
  barraSup: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
   },
   
  buscador: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    width: "30%",
  },
  listContainer:{
    backgroundColor: "green",
  },
  cardProduct:{
    backgroundColor: "yellow",
  },

})




export default Libro