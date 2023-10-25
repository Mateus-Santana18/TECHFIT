
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView  } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMeuContexto } from '../../../contexto';

import { Picker } from '@react-native-picker/picker';

import { treinoMassa, treinoPerderPeso  } from '../../../vetorTreino';

export default function App() {
  
  return (

    
    <View style={styles.container} >
        <Header />
       
        <Body />
      
      <StatusBar style="auto" />
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


  header: {
    backgroundColor: 'black',
    height: 65,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
     
  },

  body: {
    backgroundColor: 'black',

    flex: 9,
    width: '100%',
    alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center'
  },
  txtHeader: {
    
    color: 'Black',
    fontSize: 36,

  },
  txtFit: {
    
    color: '#32cd32',
    fontSize: 36,

  },
  txtTech: {
    
    color: 'white',
    fontSize: 36,

  },
  inputCadastro: {
    backgroundColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    height: 55,
    margin: 10,
    paddingLeft: 17.50,
    color: 'white',
    borderColor: '#32cd32',
    
  },
  botao: {
    backgroundColor: '#000000',
    width: '50%',
    height: 50,
    // padding: 10,
    // paddingRight: ,
    // margin: 10,
    marginTop: 50,
    borderRadius: 30,
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },

  txtBody: {
 
    color:'white',
    fontSize: 20,

  },

  txtFooter:{

    color: 'black',
    fontSize: 20
  },
  // carros: {
  //   fontSize: 25,
  //   color: '#FFF',
  // }
 
});

  function Header(){

    return(
    
      <View style={styles.header}>
        <Text style={styles.txtTech}>TECH</Text>
        <Text style={styles.txtFit}>FIT</Text>

        
      </View>
      

)
    }

    
  function Body(){
    const navigation = useNavigation();
    const { usuarios } = useMeuContexto();

    const [nomeUsuario, setNomeUsuario] = useState()
    const [emailUsuario, setEmailUsuario] = useState()
    const [senhaUsuario, setSenhaUsuario] = useState()
    const [alturaUsuario, setAlturaUsuario] = useState()
    const [pesoUsuario, setPesoUsuario] = useState()
    const [biotipoSelecionado, setBiotipoSelecionado] = useState();


    function gerarMatricula(){
      
      return '1' + Math.floor(Math.random() * (100 - 0) + 0)
      
    }
    function gerarTreino(tipo){
      if(tipo == "GM"){
        return [...treinoMassa]
      }else if(tipo == "PP"){
        return [...treinoPerderPeso]
      }
    }
    function cadastrar(){

        const usuarioCadastrar = {
          matricula: gerarMatricula(),
          nome: nomeUsuario,
          email: emailUsuario,
          senha: senhaUsuario,
          altura: alturaUsuario,
          peso: pesoUsuario,
          estiloTreino: biotipoSelecionado,
          treinoSelecionado: gerarTreino(biotipoSelecionado)
        }
        
        salvarUsuario(usuarioCadastrar)
        
        console.log(usuarios);
        navigation.navigate('Login')
  
      }
    function salvarUsuario(usuario){ 
        usuarios.push(usuario)
    }

    return(
  
      <View style={styles.body}>
        <ScrollView style={{width:'100%'}}>
        <View style={{width: '100%',height: '20%' ,paddingLeft: 16, paddingBottom: 20,}}>
           <Text style={{color: '#32cd32', fontSize: 28,}}>Bem Vindo,</Text>
           <Text style={{color: 'white', fontSize: 17, width: '75%',}}>Preencha as informações a seguir para iniciarmos o seu cadastro</Text>
        </View>

        <View style={{width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
        <TextInput style={styles.inputCadastro}
         value={nomeUsuario}
         onChangeText={setNomeUsuario}
         placeholder="Nome" 
         placeholderTextColor="#FFFFFF"       
         />
        <TextInput style={styles.inputCadastro}
         value={emailUsuario}
         onChangeText={setEmailUsuario}
         placeholder="E-mail"      
         placeholderTextColor="#FFFFFF"  
         />
        <TextInput style={styles.inputCadastro}
         value={senhaUsuario}
         onChangeText={setSenhaUsuario}
         placeholder="Senha"     
         placeholderTextColor="#FFFFFF"   
         secureTextEntry={true}  
         />
        <TextInput style={styles.inputCadastro}
         placeholder="Confirmar Senha"   
         placeholderTextColor="#FFFFFF" 
         secureTextEntry={true}   
         />       
        <TextInput style={styles.inputCadastro}
         value={alturaUsuario}
         onChangeText={setAlturaUsuario}
         placeholder="Altura"   
         placeholderTextColor="#FFFFFF" 
         maxLength={4}
         keyboardType='numeric'
         />       
        <TextInput style={styles.inputCadastro}
         value={pesoUsuario}
         onChangeText={setPesoUsuario}
         placeholder="Peso"   
         placeholderTextColor="#FFFFFF" 
         maxLength={5}
         keyboardType='numeric'
         />      
         <View style={customPickerStyles.pickerContainer}> 
        {/* <Picker
        dropdownIconColor = '#FFF'
        style={customPickerStyles.inputAndroid}
        selectedValue={biotipoSelecionado}
        onValueChange={ (itemValue, itemIndex) => setBiotipoSelecionado(itemValue) }
        >
        {biotipo}
        </Picker> */}
        <Picker
         mode={'dropdown'}
         dropdownIconColor = '#FFF'
         style={customPickerStyles.inputAndroid}
         selectedValue={biotipoSelecionado}
         onValueChange={(itemValue, itemIndex) =>
         setBiotipoSelecionado(itemValue)}>
          
    <Picker.Item style={customPickerStyles.pickerItens} label="" value="" />
    <Picker.Item style={customPickerStyles.pickerItens} label="Ganhar Massa" value="GM" />
    <Picker.Item style={customPickerStyles.pickerItens} label="Perder Peso" value="PP" />
    <Picker.Item style={customPickerStyles.pickerItens} label="Manter Saúde" value="MS" />
</Picker>
        </View>

         </View>
         <View style={{width: '100%', height: '20%', justifyContent: 'center', alignItems:'center'}}>         
         <Pressable style={styles.botao} onPress={cadastrar}>
         <Text style={styles.botaoTexto}>Cadastrar</Text>
         </Pressable>
         <Text style={{color: 'white', fontSize: 20, paddingTop: 20}} onPress={() => navigation.navigate('Login')}>Já tenho cadastro, fazer login</Text>
        
      </View>
      </ScrollView>
      </View>

    )
  } 
  

  const customPickerStyles = StyleSheet.create({
    pickerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      height: 55,
      borderWidth: 2,
      borderColor: '#32cd32',
      borderRadius: 10,
      overflow: 'hidden',
    },
    inputAndroid: {
      width: '100%',
      color: '#FFF',
    },
    // pickerItem: {
    //   fontSize: 200,

    // },
    pickerItens: {
      backgroundColor:'#000',
      color: '#FFF',
      fontSize: 22,
    },

  })

