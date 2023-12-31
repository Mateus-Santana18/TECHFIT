import { StatusBar ,} from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,ScrollView, Pressable,InnerText} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { Picker } from '@react-native-picker/picker';
import { treinoMassa, treinoPerderPeso } from '../../../vetorTreino';
import { useMeuContexto } from '../../../contexto';
import api from '../../services/api';



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
 <View style={{width:'100%',height:'30%',alignItems:'center'}}>
  <View style={{flexDirection:'row',justifyContent:'center',width:'100%',height:'20%',alignItems:'center'}}>
    <Text style={{color:'white',fontSize:35}}>TECH </Text>
    <Text style={{color:'#00bf63',fontSize:35}}>FIT</Text>
  </View>
  <View style={{height:'80%',width:'50%',alignItems:'center'}}>
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

  const { usuarios, setUsuarios } = useMeuContexto();
  const navigation = useNavigation();
  const { usuarioLogado, setUsuarioLogado } = useMeuContexto();
  useEffect(() => {mostrarUsuario(usuarioLogado)}, []);
  const [botaoEditar, setBotaoEditar] = useState(false)
  const [nomeInput, setNomeInput] = useState();
  const [alturaInput, setAlturaInput] = useState();
  const [pesoInput, setPesoInput] = useState();
  const [cor, setCor] = useState('#171717');
  const [biotipoSelecionado, setBiotipoSelecionado] = useState();

  function gerarTreino(tipo){
    if(tipo == "GM"){
      return [...treinoMassa]
    }else if(tipo == "PP"){
      return [...treinoPerderPeso]
    }
  }

  function lapisAlterar(){
    setBotaoEditar(true)
    setCor('#404040')
  }

  function posicaoUsuario(){
    for(i = 0; i < usuarios.length; i++){
      if(usuarioLogado.email == usuarios[i].email){
        return i
      }
    }
  }



  function salvar(){

    const index = posicaoUsuario();
    const usuarioLogadoDupli = {
      ...usuarioLogado
    };

    usuarioLogadoDupli.nome = nomeInput;
    usuarioLogadoDupli.altura = parseFloat(alturaInput);
    usuarioLogadoDupli.peso = parseFloat(pesoInput);
    usuarioLogadoDupli.estiloTreino = biotipoSelecionado;
    usuarioLogadoDupli.treinoSelecionado = gerarTreino(biotipoSelecionado);

    setUsuarioLogado(usuarioLogadoDupli);

    api.put(`users/${usuarioLogado.id}`, {
      nome: usuarioLogadoDupli.nome,
      altura: usuarioLogadoDupli.altura,
      peso: usuarioLogadoDupli.peso,
      estiloTreino: usuarioLogadoDupli.estiloTreino,
    }).then((response) => {
      console.log('PUT: ', response.data);
    }).catch((error) => {
      console.log(error);
    });

    setBotaoEditar(false)
    setCor('#171717')

    mostrarUsuario(usuarioLogadoDupli)
    console.log(usuarioLogadoDupli);
  }
  
  function mostrarUsuario(usuarioParam){
    
    setNomeInput(usuarioParam.nome);
    setAlturaInput(usuarioParam.altura.toString())
    setPesoInput(usuarioParam.peso.toString())
    setBiotipoSelecionado(usuarioParam.estiloTreino)
  }

  function desativar() {
    const usuarioId = usuarioLogado.id;

    api.delete(`users/${usuarioId}`).then((response) => {
      setUsuarioLogado(null);
      navigation.navigate('Inicial');
    }
    ).catch((error) => {
      console.log(error);
    });
  }
  
 return(
    //  <ScrollView>
  
<View style={{width:'100%',height:'70%',justifyContent:'space-between',alignItems:'center'}}> 
  <View style={{width:'100%',height:'10%',alignItems:'center'}}>
  <Text style={{color:'#00bf63',fontSize:35}}>EDITAR DADOS</Text> 
  </View> 
  
  <View style={stylePerfil.viewStyles}>
  <Text style={{color:'#00bf63',fontSize:32}}>Nome : </Text> 
    <TextInput
    editable={botaoEditar}
    value={nomeInput}
    onChangeText={setNomeInput}
    style={[stylePerfil.inptsPerfil, {backgroundColor: cor}]}
  />
  </View> 
  <View style={stylePerfil.viewStyles}>
  <Text style={{color:'#00bf63',fontSize:32}}>Email : </Text> 
  <TextInput
    defaultValue={usuarioLogado?.email}
    editable={false}
    style={[stylePerfil.inptsPerfil, {backgroundColor: '#171717'}]}
  />
  </View> 
  <View style={stylePerfil.viewStyles}>
  <Text style={{color:'#00bf63',fontSize:32}}>Altura : </Text> 
  <TextInput
    editable={botaoEditar}
    value={alturaInput}
    onChangeText={setAlturaInput}
    maxLength={4}
    style={[stylePerfil.inptsPerfil, {backgroundColor: cor}]}/>
  </View> 
  <View style={stylePerfil.viewStyles}>
  <Text style={{color:'#00bf63',fontSize:32}}>Peso : </Text> 
  <TextInput
    editable={botaoEditar}
    value={pesoInput}
    onChangeText={setPesoInput}
    maxLength={4}
    style={[stylePerfil.inptsPerfil, {backgroundColor: cor}]}
  />
  </View>
  <View style={stylePerfil.viewStyles}>
  <Text style={{color:'#00bf63',fontSize:32}}>Treino : </Text> 
  <Picker
          mode={'dropdown'}
          dropdownIconColor = '#FFF'
          style={customPickerStyles.inputAndroid}
          selectedValue={biotipoSelecionado}
          onValueChange={(itemValue, itemIndex) =>
          setBiotipoSelecionado(itemValue)}
  >
            
      <Picker.Item style={customPickerStyles.pickerItens} label="" value="" />
      <Picker.Item style={customPickerStyles.pickerItens} label="Ganhar Massa" value="GM" />
      <Picker.Item style={customPickerStyles.pickerItens} label="Perder Peso" value="PP" />
  </Picker>
  
  </View>
  
  <View style={{width:'100%',height:'15%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
  <TouchableOpacity style={{borderWidth:1,borderColor:'#ffff',borderRadius:25,width:125,height:50,justifyContent:'center',alignItems:'center'}}>
  <Text style={{color:'#ffff',fontSize:30}} onPress={desativar}>Desativar</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{borderWidth:1,borderColor:'#ffff',borderRadius:25,width:125,height:50,justifyContent:'center',alignItems:'center'}}
    onPress={salvar}
  >
  <Text style={{color:'#ffff',fontSize:30}}>Salvar</Text>
  </TouchableOpacity>
  <FontAwesome
          name= 'pencil'
          size= {30}
          color= '#FFF'
          onPress={lapisAlterar}
    />
  </View>
 </View> 

 )


}
const customPickerStyles = StyleSheet.create({
  inputAndroid: {
    width: 250,
    color: '#FFF',
  },

  pickerItens: {
    backgroundColor:'#000',
    color: '#FFF',
    fontSize: 25,
  },

})
const stylePerfil = StyleSheet.create({
 
  inptsPerfil: {
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
    height:'10%',
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