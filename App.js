import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react';

import Inicial from './src/Pages/Inicial';
import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';
import Principal from './src/Pages/Principal';
import Perfil from './src/Pages/Perfil';
import Treinos from './src/Pages/Treinos';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    // <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Principal" component={Principal}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Treinos" component={Treinos}/>
      </Stack.Navigator>
    </NavigationContainer>
      // <StatusBar style="auto" />
    //* </View> */}
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





