import React, {useState} from 'react' //useState é um hook para  gerenciar os estados
import { SafeAreaView, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import verissimo from './assets/verissimo.png'
import {FontAwesome} from '@expo/vector-icons'
import * as Speech from 'expo-speech'

export default function App(){
  const [falando, setFalando] = useState(false)


let frases = ['Eu estou sem internet, por isso não pude pesquisar frases de Verissimo.',
  'Frase um.',
  'Frase dois.',
  'Frase três.',
  'Frase quatro.',
  'Frase cinco.',
  'Frase seis.',
  'Frase sete.',
  'Frase oito.',
  'Frase nove.',
  'Frase dez.']

  const iniciaFala = () => {
    setFalando(true)
  }

  const finalizaFala = () => {
    setFalando(false)
  }

  function falar(){
    let frase = frases[parseInt(Math.random() * frases.length)]
    Speech.speak(frase, {
      language: 'pt',
      onStart:iniciaFala,
      onDone: finalizaFala
    })
  }
  function parar(){
    Speech.stop()
  }

  return(
    <SafeAreaView style={styles.Principal}>    
      <Text style={styles.Titulo}><FontAwesome name="comment-o" size={40}/>Fala Verissimo! {falando}</Text>
      <Image source={verissimo} style={styles.Imagem} />
      {/*sou um comentario*/}
      {falando && <ActivityIndicator size="large" color="#0275d8"/>}
      <View style={styles.ViewBotao}>
        <FontAwesome.Button
          name="volume-up"
          backgroundColor="#0275d8"
          onPress={falar}
          style={styles.Botao}>
            ouvir a frase
        </FontAwesome.Button>
        <FontAwesome.Button
          name="stop-circle"
          backgroundColor={!falando ? "#cccccc" : "#D9534F"}
          disabled={!falando}
          onPress={parar}
          style={styles.Botao}>
            Parar
        </FontAwesome.Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   Principal: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-around', // Disribui uniformemente os elementos na vertical
     alignItems: 'center',
   },
   Titulo: {
     fontSize: 30,
     color: "#1A237E"
   },
   Imagem: {
     resizeMode: 'center',
     width: '95%',
     height: 400
   },
   Botao: {
     width: 150,
     height:32
   },
   ViewBotao: {
     flexDirection: "row"
   }
})