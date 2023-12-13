import { StyleSheet, Text, View } from 'react-native'
import Header from '../componentes/header'

const Home = () => {
    return (
        <>
          <Header />
          <View style={styles.container}>
              <Text> HOLA mundo </Text>
          </View>
        </>
      )
    }
    
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorSecundario,
    
      }
    })

export default Home

