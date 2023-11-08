import { StatusBar ,} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,ScrollView, Pressable,InnerText} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { KeyboardAvoidingView } from 'react-native';


export default function App() {


 return (
 <View style={styles.container}>
 <Cima/>
 <Meio />
 {/* <Baixo/> */}
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
 <View style={{width:'100%',height:'30%',backgroundColor:'purple',alignItems:'center'}}>
 <View style={{flexDirection:'row',justifyContent:'center',width:'100%',height:'20%',alignItems:'center'}}>
 <Text style={{color:'white',fontSize:35}}>TECH </Text>
 <Text style={{color:'#00bf63',fontSize:35}}>FIT</Text>
 </View>
 <View style={{height:'80%',width:'50%',alignItems:'center'}}>
 {/* <Image source={require('../../../imagem/perfil.png')} style={{width:'100%', height:'100%'}}/> */}
 <FontAwesome
        name= 'user'
        size= {180}
        color= '#FFF'
      />
 </View>
 </View>
 )


}
function Meio(){
  const [botaoEditar, setBotaoEditar] = useState(false)
 return(
    //  <ScrollView>
  
<View style={{width:'100%',height:'70%',justifyContent:'space-between',alignItems:'center',backgroundColor:'red'}}> 
 <View style={{width:'100%',height:'10%',alignItems:'center'}}>
 <Text style={{color:'#00bf63',fontSize:35}}>EDITAR DADOS</Text> 
 </View> 
 
 <View style={stylePerfil.viewStyles}>
 <Text style={{color:'#00bf63',fontSize:32}}>Nome : </Text> 
 <TextInput
 editable={botaoEditar}
 style={stylePerfil.inptsPerfil}/>
 </View> 
 <View style={stylePerfil.viewStyles}>
 <Text style={{color:'#00bf63',fontSize:32}}>Email : </Text> 
 <TextInput
 editable={botaoEditar}
 style={stylePerfil.inptsPerfil}/>
 </View> 
 <View style={stylePerfil.viewStyles}>
 <Text style={{color:'#00bf63',fontSize:32}}>Idade : </Text> 
 <TextInput
 editable={botaoEditar}
 style={stylePerfil.inptsPerfil}/>
 </View> 
 <View style={stylePerfil.viewStyles}>
 <Text style={{color:'#00bf63',fontSize:32}}>Altura : </Text> 
 <TextInput
 editable={botaoEditar}
 style={stylePerfil.inptsPerfil}/>
 </View> 
 <View style={stylePerfil.viewStyles}>
 <Text style={{color:'#00bf63',fontSize:32}}>Peso : </Text> 
 <TextInput
 editable={botaoEditar}
 style={stylePerfil.inptsPerfil}/>
 
 </View>
 
 <View style={{width:'100%',height:'15%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
 <TouchableOpacity style={{borderWidth:1,borderColor:'#ffff',borderRadius:25,width:125,height:50,justifyContent:'center',alignItems:'center'}}>
 <Text style={{color:'#ffff',fontSize:30}}>Desativar</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{borderWidth:1,borderColor:'#ffff',borderRadius:25,width:125,height:50,justifyContent:'center',alignItems:'center'}}>
 <Text style={{color:'#ffff',fontSize:30}}>Salvar</Text>
 </TouchableOpacity>
 <FontAwesome
        name= 'pencil'
        size= {30}
        color= '#FFF'
       onPress={() => setBotaoEditar(!botaoEditar)}
      />
 </View>
 </View> 

 )


}
const stylePerfil = StyleSheet.create({
 
  inptsPerfil: {
      backgroundColor:'#171717',
      // backgroundColor: '#404040',
      width: 250,
      height: 35,
      fontSize: 25,
      color: 'white',
      borderRadius: 10,
      paddingLeft: 15,
      
          
  },
  viewStyles: {
    width:'100%',
    height:'15%',
    alignItems:'flex-start',
    flexDirection:'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
    

  }

 });
// function Baixo(){
//  return(
//  <View style={{width:'100%',flex:0.1,backgroundColor:'black'}}>
 
//  </View>
//  )


// }