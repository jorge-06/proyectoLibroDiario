import { useState } from "react"
import { View, TextInput, Button, StyleSheet, FlatList, Text, Modal} from "react-native"
import uuid from 'react-native-uuid'
import { colors } from "../global/colors"



const Listado = () =>{

  const [ newTitleProduct, setNewTitleProduct] = useState ("")
  const [ newProductPrice, setNewProductPrice] = useState ("")
  const [products, setProducts] = useState ([])
  
  const [productSelected, setProductSelected] = useState ({})
  const [ modalVisible, setModalVisible] = useState (false)
  const handlerModal = (item) => {
    setModalVisible(true)
    setProductSelected(item)
  }
  const handlerDelete = () =>{
    setProducts (current => current.filter (product => product.id !== productSelected.id))
    setModalVisible(false)
  }

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
                           renderItem={({item}) => 
                        <View style ={estilos.cardProduct}>
                          <Text>{item.title}</Text>
                          <Text>{item.price} $</Text>
                          <Button title="DEL" onPress={()=> handlerModal (item)}/>
                        </View>}
                  />
              </View>
              <Modal
              visible = {modalVisible} 
              >
                <View>
                  <Text>¿Seguro que quiere eliminar?</Text>
                  <Text>{productSelected.title}{productSelected.price}</Text>
                  <Button title="Borrar" onPress={handlerDelete}/>
                  <Button title="Cancelar" onPress={()=> setModalVisible (false)}/>
                </View>

              </Modal>

         </View>

}


const estilos = StyleSheet.create ({
  fondo: {
    backgroundColor : colors.colorPrincipal,
    flex : 1,
    justifyContent: "start",
    alignItems: "center",
  },
  barraSup: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    padding: "5%",
    marginTop: "5%",
   },

  buscador: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    width: "30%",
  },
  listContainer:{
    backgroundColor: colors.colorTerciario,
    width: "92%",
    padding: "3%",
    borderRadius: 5,
    
    
  },
  cardProduct:{
    backgroundColor: colors.colorTerciario,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: "5%",
    borderRadius: 5,

  },
});





export default Listado