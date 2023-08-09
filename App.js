import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function MyButton(props){
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text style={styles.textoButton}>{props.texto}</Text>
    </TouchableHighlight>
  )
}

export default function App() {
 const [contador, setContador] = useState(0);


  const contar = () => {
    setContador(contador + 1)
  };

  const decrementar = () => {
    setContador(contador - 1)
  }
  const resetar = () => {
    setContador(0)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{contador}</Text>
      <StatusBar style="auto" />
      <MyButton 
       texto="Incrementar"
       onClick={contar}  
       backgroundColor={'red'}
      />
      <MyButton 
       texto="Decrementar"
       onClick={decrementar}
      />
      <MyButton 
       texto="Resetar"
       onClick={resetar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADBC8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  button: {
    backgroundColor: '#900C3F',
    width: '75%',
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 25,
    borderRadius: 10, 
    fontSize: 50,
    borderWidth: 2,
    borderColor: '#C70039',
   
  },

  textoButton: {
    fontSize: 40,
    color: '#F8F0E5'
  },

  texto: {
    fontSize: 100,
    color: 'red',
    marginBottom: 75,
  }
})
