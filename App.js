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

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} options={{title: 'Página Inicial', headerStyle: {backgroundColor:'#000',}, headerTintColor:'#FFF', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Página Login', headerStyle: {backgroundColor:'#000',}, headerTintColor:'#FFF', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{title: 'Página Cadastro', headerStyle: {backgroundColor:'#000',}, headerTintColor:'#FFF', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Principal" component={Principal} options={{title: 'Página Principal', headerStyle: {backgroundColor:'#000',}, headerTintColor:'#FFF', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{title: 'Página Perfil', headerStyle: {backgroundColor:'#000',}, headerTintColor:'#FFF', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Treinos" component={Treinos} options={{title: 'Página Treinos', headerStyle: {backgroundColor:'#000',}, headerTintColor:'#FFF', headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}







