import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native';

import React from 'react';


export default function App() {
  
  return (
    <View style={styles.container}>
    <Topo/>
    <Meio/>
    <Baixo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap:2
  },
});
function Topo(){
 
return(
  <View style={{width:'100%',height:150,backgroundColor:'black'}}>
    <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40}}>
      <Text style={{color:'white',fontSize:35}}>TECH </Text>
      <Text style={{color:'green',fontSize:35}}>FIT</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Text style={{color:'white',fontSize:25,borderRadius:3,borderColor:'green',borderWidth:1,paddingLeft:0}}> Brasil </Text>
    </View>

  </View>
);
}
function Meio(){
return(
  <View style={{width:'100%',flex:1,backgroundColor:'black'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image source={require("./imagens/Capturarmulharcapa.PNG")} style={{width:375, height:375}}/>

    </View>
  </View>
);
}
function Baixo(){
return(
  <View style={{width:'100%',height:125,backgroundColor:'black'}}>
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'black',gap:6}}>
    <TouchableOpacity style={{backgroundColor:'black',width:120,height:40,borderRadius:20,borderWidth:3,justifyContent:'center',alignItems:'center',color:'white',borderColor:'white'}} >
      <Text style={{color:'white',fontSize:20}}>ENTRAR</Text></TouchableOpacity>
   <TouchableOpacity/>
    <TouchableOpacity style={{backgroundColor:'black',width:120,height:40,borderRadius:20,borderWidth:3,justifyContent:'center',alignItems:'center',color:'white',borderColor:'white'}} >
      <Text style={{color:'white',fontSize:18}}>CADASTRAR</Text></TouchableOpacity>
   <TouchableOpacity/>
  

    </View>
  </View>
);
}
  




