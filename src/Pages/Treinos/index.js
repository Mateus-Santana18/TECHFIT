import { StatusBar ,} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, ScrollView, Pressable,InnerText, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMeuContexto } from '../../../contexto';
import { treinoMassa } from '../../../vetorTreino';
import { treinoPerderPeso } from '../../../vetorTreino';

export default function App() {


 return (
 <View style={styles.container}>
 <Cima/>
 <Meio />
 <Baixo/>
 <StatusBar style='auto'/>
 </View>
 )};


const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: 'black',
 alignItems:'center'
 },
 
});
function Cima(){
 return(
 <View style={{width:'100%',height: '30%',backgroundColor:'black',alignItems:'center'}}>
 <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'black',width:'100%',height:'20%',alignItems:'center'}}>
 <Text style={{color:'#ffff',fontSize:35}}>TECH </Text>
 <Text style={{color:'#00bf63',fontSize:35}}>FIT</Text>
 </View>
 <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'black',width:'100%',height:'20%',alignItems:'center',}}>
 <Text style={{color:'#00bf63',fontSize:35}}>TREINO</Text>
 </View>
 </View>
 )


}
function Meio(){
    const { usuarios } = useMeuContexto();
    const { usuarioLogado, setUsuarioLogado} = useMeuContexto();
 return(
 
    <View>
        <Text style={{color: '#FFF'}}>aaaaaaaaaa</Text>
        {usuarioLogado.treinoSelecionado.map( (exercicio, index) => (
            <Post texto={exercicio.nomeExercicio} imagem={exercicio.imagem} key={index}/>
        ))}

    </View>  

//     //  <View style={{width:'90%',flex:1,justifyContent:'space-evenly',alignItems:'center',borderRadius:10}}>
//  {/* <View style={{backgroundColor:'#272727',width:'80%',height:'40%',borderRadius:10,paddingLeft:10}}>
//  <Image source={require('../../../imagem/imgdotreino1.png')} style={{width:'30%', height:'100%'}}/>
//  {/* <Image source={require('../../../imagem/gifTreino.gif')} style={{width:'30%', height:'80%', borderRadius:10}}/> */
//  /* </View> */}

// //  </View>
 
 )}

function Post(props){
    const { usuarios } = useMeuContexto();
    return(

        <View style={{width:'100%',height:'70%',justifyContent:'space-evenly',alignItems:'center',borderRadius:10}}>
            
        <View style={{backgroundColor:'#272727',width:350,height:150,borderRadius:10,paddingLeft:10, justifyContent: 'center',flexDirection: 'row'}}>
        <Text style={{color: '#FFF'}}>aaaaaaaaaa</Text>
        <Image source={props.imagem} style={{width:'30%', height:'80%'}}/>
        <Text style={{fontSize:80, color: '#FFF'}}>{props.texto}</Text>
        {/* <Button title='clique aqui' onPress={() => console.log(usuarios[0].treinoSelecionado[0].nomeExercicio)}/> */}
        </View>
        </View>
      )
}


function Baixo(){
 return(
 <View style={{width:'100%',flex:0.5,backgroundColor:'black'}}>
 
 </View>
 )


}

