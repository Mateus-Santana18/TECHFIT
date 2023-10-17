import { StatusBar ,} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, ScrollView, Pressable,InnerText} from 'react-native';
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
 backgroundColor: 'black',
 alignItems:'center'
 },
 
});
function Cima(){
 return(
 <View style={{width:'100%',flex:1,backgroundColor:'black',alignItems:'center',paddingTop:50}}>
 <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'black',width:'100%',height:'30%',alignItems:'center'}}>
 <Text style={{color:'#ffff',fontSize:35}}>TECH </Text>
 <Text style={{color:'#00bf63',fontSize:35}}>FIT</Text>
 </View>
 <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'black',width:'100%',height:'30%',alignItems:'center',paddingTop:0}}>
 <Text style={{color:'#00bf63',fontSize:35}}>TREINO</Text>
 </View>
 </View>
 )


}
function Meio(){
 return(
 
 
 <View style={{width:'90%',flex:1,justifyContent:'space-evenly',alignItems:'center',borderRadius:10}}>
 <View style={{backgroundColor:'#272727',width:'80%',height:'40%',borderRadius:10,paddingLeft:10}}>
 <Image source={require('../../../imagem/imgdotreino1.png')} style={{width:'30%', height:'100%'}}/>
 {/* <Image source={require('../../../imagem/gifTreino.gif')} style={{width:'30%', height:'80%', borderRadius:10}}/> */}
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