import { StatusBar ,} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,ScrollView, Pressable,InnerText} from 'react-native';
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
 <View style={{width:'100%',flex:1,backgroundColor:'black',alignItems:'center'}}>
 <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'black',width:'100%',height:'30%',alignItems:'center'}}>
 <Text style={{color:'white',fontSize:35}}>TECH </Text>
 <Text style={{color:'#00bf63',fontSize:35}}>FIT</Text>
 </View>
 <View style={{height:'50%',width:'50%',backgroundColor:'black'}}>
 <Image source={require('../../../imagem/perfil.png')} style={{width:'100%', height:'100%'}}/>
 
 </View>
 </View>
 )


}
function Meio(){
 return(
 <View style={{width:'90%',flex:1.2,justifyContent:'space-between',alignItems:'center',borderRadius:10}}>
 <View style={{backgroundColor:'black',width:'100%',height:'10%',alignItems:'center'}}>
 <Text style={{color:'#00bf63',fontSize:35}}>EDITAR DADOS</Text> 
 </View> 
 <View style={{backgroundColor:'black',width:'100%',height:'10%',alignItems:'flex-start'}}>
 <Text style={{color:'#00bf63',fontSize:32}}>Nome :</Text> 
 </View> 
 <View style={{backgroundColor:'black',width:'100%',height:'10%',alignItems:'flex-start'}}>
 <Text style={{color:'#00bf63',fontSize:32}}>Email :</Text> 
 </View> 
 <View style={{backgroundColor:'black',width:'100%',height:'10%',alignItems:'flex-start'}}>
 <Text style={{color:'#00bf63',fontSize:32}}>Idade :</Text> 
 </View> 
 <View style={{backgroundColor:'black',width:'100%',height:'10%',alignItems:'flex-start'}}>
 <Text style={{color:'#00bf63',fontSize:32}}>Altura :</Text> 
 </View> 
 <View style={{backgroundColor:'black',width:'100%',height:'10%',alignItems:'flex-start'}}>
 <Text style={{color:'#00bf63',fontSize:32}}>Peso :</Text> 
 </View> 
 <View style={{width:'100%',height:'15%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
 <TouchableOpacity style={{borderWidth:1,borderColor:'#ffff',borderRadius:25,width:150,height:50,justifyContent:'center',alignItems:'center'}}>
 <Text style={{color:'#ffff',fontSize:35}}>Desativar</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{borderWidth:1,borderColor:'#ffff',borderRadius:25,width:150,height:50,justifyContent:'center',alignItems:'center'}}>
 <Text style={{color:'#ffff',fontSize:35}}>Salvar</Text>
 </TouchableOpacity>
 </View>
 </View>
 )


}
function Baixo(){
 return(
 <View style={{width:'100%',flex:0.1,backgroundColor:'black'}}>
 
 </View>
 )


}