import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


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
    fontSize: 20,
    width: '80%',
    height: 55,
    margin: 10,
    paddingLeft: 10,
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
    marginTop: 15,
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
    return(
  
      <View style={styles.body}>
      
        <View style={{width: '100%', height: '40%', justifyContent: 'center', alignItems: 'center'}}>
        <TextInput style={styles.inputCadastro}
         placeholder="E-mail" 
         placeholderTextColor="#FFFFFF"       
         />
        <TextInput style={styles.inputCadastro}
         placeholder="Senha"      
         placeholderTextColor="#FFFFFF"  
          autoCapitalize="none"
          secureTextEntry 
         />
         <View style={{width: '100%', justifyContent: 'row', alignItems: 'flex-end', paddingRight: 35,}}>
         <Text style={{color: 'white', fontSize: 20,}}>Esqueceu a senha?</Text>
         </View>
         </View>
         <View style={{width: '100%', height: '20%', justifyContent: 'center', alignItems:'center'}}>         
         <Pressable style={styles.botao} onPress={() => navigation.navigate('Principal')}>
         <Text style={styles.botaoTexto}>Entrar</Text>
         </Pressable>
         <Text style={{color: 'white', fontSize: 20, paddingTop: 20}} onPress={() => navigation.navigate('Cadastro')}>Sou novo por aqui, quero cadastrar</Text>

      </View>
      </View>

    )
  }