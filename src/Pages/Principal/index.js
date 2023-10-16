import { StatusBar ,} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,ScrollView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
 
});
function Cima(){
  return(
    <View style={{width:'100%',height:350,backgroundColor:'black'}}>
    <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40}}>
      <Text style={{color:'white',fontSize:35}}>TECH </Text>
      <Text style={{color:'green',fontSize:35}}>FIT</Text>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',paddingTop:55}}>
      <Image source={require('../../../imagem/imagemacademia2.0.jpg')} style={{width:'100%', height:200}}/> 
      
    </View>
  </View>
  )


}
function Meio(){
  const navigation = useNavigation();
  return(
    <View style={{width:'100%',flex:1,justifyContent:'space-evenly',alignItems:'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <View style={{width:'80%',height:150,backgroundColor:'#272727',borderRadius:10,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
      <Image source={require('../../../imagem/imgPerfil.png')} style={{width:120, height:120,borderRadius:10}}/>
      <Text style={{fontSize:55,color:'white'}}>Perfil</Text>  
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Treinos')}>
      <View style={{width:'80%',height:150,backgroundColor:'#272727',borderRadius:10,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}} >
      <Image source={require('../../../imagem/imgTreino.png')} style={{width:120, height:120,borderRadius:10}}/>
      <Text style={{fontSize:55,color:'white'}}>Treino</Text>  
      
      </View>
      </TouchableOpacity>
    
      
    </View>
  )


}
function Baixo(){
  return(
    <View style={{width:'100%',height:50,backgroundColor:'black'}}>
      
    </View>
  )


}