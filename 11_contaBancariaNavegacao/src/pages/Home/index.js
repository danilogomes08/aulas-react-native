import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Switch, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
 
export default function Home() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexoOp, setSexoOp] = useState(0);
  const [escolaridadeOp, setEscolaridadeOp] = useState(0);
  const [limite, setLimite] = useState(0);
  const [nacionalidade, setNacionalidade] = useState(0);


  function nextScreen() {
    navigation.navigate('Dados',  {nome, idade, sexoOp, escolaridadeOp, limite, nacionalidade});
  }

    return (
      <View style={styles.container}>
         <ScrollView>
            <Text style= {{marginBottom: 20, marginTop: 80 , alignSelf: 'center'}}>Abertura de conta</Text>
      
            <TextInput 
              placeholder="Nome:"
              style={styles.input}
              onChangeText={(text) => setNome(text)}
            />
      
          <TextInput 
              placeholder="Idade: "
              style={styles.input}
              onChangeText={(age) => setIdade(age)}
              keyboardType='numeric'
          />

          <Text style={{alignSelf: 'center', marginTop: 30}}> 
            Gênero:
          </Text>

          <Picker 
            selectedValue={sexoOp}
            onValueChange={(value) => setSexoOp(value)}>
              <Picker.Item key={0} value={'Feminino'} label="Feminino" /> 
              <Picker.Item key={1} value={'Masculino'} label="Masculino" />
          </Picker>

          <Text style={{alignSelf: 'center'}}> 
            Escolaridade:
          </Text>

          <Picker 
            selectedValue={escolaridadeOp}
            onValueChange={(value) => setEscolaridadeOp(value)}>
              <Picker.Item key={0} value={'Ensino fundamental'} label={'Ensino fundamental'} />
              <Picker.Item key={1} value={'Ensimo Médio'} label={'Ensimo Médio'} />
              <Picker.Item key={2} value={'Ensino Superior'} label={'Ensino Superior'} />
              <Picker.Item key={3} value={'Pós Graduação'} label={'Pós Graduação'} />
              <Picker.Item key={4} value={'PMestrado'} label={'Mestrado'} />
          </Picker>
      
          <Text style={{alignSelf: 'center', }}> 
            Limite:
          </Text>

          <Slider
            minimumValue={10}
            maximumValue={1000}
            step={10}
            value={limite}
            onValueChange={(valorLimite) => setLimite(valorLimite)}
          />

          <Text style={{alignSelf: 'center', marginTop: 30}}> 
            Brasileiro?
          </Text>

          <Switch 
            style={{alignSelf: 'center', marginTop: 10, marginBottom: 40}}
            value={nacionalidade}
            onValueChange={ (valorNacionalidade) => setNacionalidade(valorNacionalidade)}
          />


          <Button style={{marginBottom: 50}}
            title="Ir para tela de dados"
            onPress={nextScreen}
          />
          
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10,
    width: 300,
    alignSelf: 'center'
  },
});