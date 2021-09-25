import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Dados( {route} ){
  const navigation = useNavigation();
 
  return(
    <View>
      <Text>Sobre</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
      <Text>Sexo: {route.params?.sexoOp}</Text>
      <Text>Escolaridade: {route.params?.escolaridadeOp}</Text>
      <Text>Limite: {route.params?.limite}</Text>
      <Text>Brasileiro: {route.params?.nacionalidade ? 'SIM' : 'NÃO'}</Text>

      <Button
      title='Voltar para tela Home'
      onPress={ () => navigation.goBack() }
      />
    </View>
  )
}
