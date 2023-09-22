import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable  } from 'react-native';


export default function App() {

  return (

    
    <View style={styles.container} >
        <Header />
        <Body />
        <Footer />
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
    // flex: 8,
    flex: 8,
    width: '100%',
    alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center'
  },

  footer: {
    backgroundColor: 'black',
    // height: 65,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
   
  },

  txtHeader: {
    
    color: 'Black',
    fontSize: 36,

  },
  txtFit: {
    
    color: '#32cd32',
    fontSize: 36,
    fontStyle: 'bold',
  },
  txtTech: {
    
    color: 'white',
    fontSize: 36,
    fontStyle: 'bold',
  },
  inputCadastro: {
    backgroundColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    width: '90%',
    padding: 10,
    margin: 10,
    color: 'white',
    borderColor: '#32cd32',
  },
  botao: {
    backgroundColor: '#000000',
    width: '50%',
    padding: 10,
    // paddingRight: ,
    margin: 10,
    borderRadius: 30,
    alignItems: 'center', 
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

    return(
  
      <View style={styles.body}>
        <View style={{width: '100%', paddingLeft: 16, paddingBottom: 20,}}>
           <Text style={{color: '#32cd32', fontSize: 28,}}>Bem Vindo,</Text>
           <Text style={{color: 'white', fontSize: 17, width: '75%',}}>Preencha as informações a seguir para iniciarmos o seu cadastro</Text>
        </View>

        <View style={styles.divInpts}>
        <TextInput style={styles.inputCadastro}
         placeholder="Nome"       
         />
        <TextInput style={styles.inputCadastro}
         placeholder="E-mail"       
         />
        <TextInput style={styles.inputCadastro}
         placeholder="Senha"       
         />
        <TextInput style={styles.inputCadastro}
         placeholder="Confirmar Senha"       
         />       
         </View>
         {/* <View style={styles.divBotao}>          */}
         <Pressable style={styles.botao}>
         <Text style={styles.botaoTexto}>Cadastrar</Text>
         </Pressable>
         {/* </View> */}
         <Pressable style={styles.botaoTexto}>
         <Text style={{color: 'white', fontSize: 20,}}>Já tenho cadastro, fazer login</Text>
      </Pressable>
      </View>

    )
  }

  function Footer(){

    return(

      <View style={styles.footer}>
        <Text style={styles.txtFooter}>eqwewq </Text>
      </View>

    )
  }