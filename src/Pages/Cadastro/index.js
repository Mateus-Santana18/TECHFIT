
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView  } from 'react-native';
import { useState } from 'react';

import { Picker } from '@react-native-picker/picker';

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
  carros: {
    fontSize: 25,
    color: '#FFF',
  }
 
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
    const [biotipoSelecionado, setBiotipoSelecionado] = useState(0);
    const [selecionarBiotipo, setSelecionarBiotipo] = useState([
      {key: 1, nome: 'Perder Peso', },
      {key: 2, nome: 'Manter Saúde'},
      {key: 3, nome: 'Ganhar massa'},    
    ])  
    let biotipo = selecionarBiotipo.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} style={customPickerStyles.pickerItem} />
    })
    return(
  
      <View style={styles.body}>
        <ScrollView style={{width:'100%'}}>
        <View style={{width: '100%',height: '20%' ,paddingLeft: 16, paddingBottom: 20,}}>
           <Text style={{color: '#32cd32', fontSize: 28,}}>Bem Vindo,</Text>
           <Text style={{color: 'white', fontSize: 17, width: '75%',}}>Preencha as informações a seguir para iniciarmos o seu cadastro</Text>
        </View>

        <View style={{width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
        <TextInput style={styles.inputCadastro}
         placeholder="Nome" 
         placeholderTextColor="#FFFFFF"       
         />
        <TextInput style={styles.inputCadastro}
         placeholder="E-mail"      
         placeholderTextColor="#FFFFFF"  
         />
        <TextInput style={styles.inputCadastro}
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
         placeholder="Altura"   
         placeholderTextColor="#FFFFFF" 
         maxLength={4}
         keyboardType='numeric'
         />       
        <TextInput style={styles.inputCadastro}
         placeholder="Peso"   
         placeholderTextColor="#FFFFFF" 
         maxLength={4}
         keyboardType='numeric'
         />      
         <View style={customPickerStyles.pickerContainer}> 
        <Picker
        dropdownIconColor = '#FFF'
        style={customPickerStyles.inputAndroid}
        selectedValue={biotipoSelecionado}
        onValueChange={ (itemValue, itemIndex) => setBiotipoSelecionado(itemValue) }
        >
        {biotipo}
        </Picker>
        </View>

         </View>
         <View style={{width: '100%', height: '20%', justifyContent: 'center', alignItems:'center'}}>         
         <Pressable style={styles.botao}>
         <Text style={styles.botaoTexto}>Cadastrar</Text>
         </Pressable>
         <Text style={{color: 'white', fontSize: 20, paddingTop: 20}}>Já tenho cadastro, fazer login</Text>

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
      color: 'white',
      
    },
    pickerItem: {
      fontSize: 22,
      
    },

  })

