import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function MyButton(props){
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text>{props.texto}</Text>
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

  return (
    <View style={styles.container}>
      <Text>Valor = {contador}</Text>
      <StatusBar style="auto" />
      <MyButton 
       texto="Incrementar"
       onClick={contar}  
      />
      <MyButton />
      <MyButton 
       texto="Decrementar"
       onClick={decrementar}
      />
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#f194ff',
   
  },

  texto: {
    fontSize: 20,
  }
})
