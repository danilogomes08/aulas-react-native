import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Switch, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexos: 0,
      sexoOp: [
        {genero: 'Masculino'},
        {genero: 'Feminino'}
      ],
      escolaridade: 0,
      escolaridadeOp: [
        {e: 'Ensino fundamental'},
        {e: 'Ensimo Médio'},
        {e: 'Ensino Superior'},
        {e: 'Pós Graduação'},
        {e: 'Mestrado'}
      ],
      nacionalidade: false,
      limite: 0,
      retorno: ''
    }

    this.retorno = this.retorno.bind(this);
  }

  retorno() {
    
    if(this.state.nome == '' || this.state.idade == '') {
      this.setState({retorno: "Preencha todos os campos"})
    } else {
     this.setState({
          nome: this.state.nome,
          idade: this.state.idade,
          limite: this.state.limite,
          retorno: `
            Nome: ${this.state.nome}
            Idade: ${this.state.idade}
            Sexo: ${this.state.sexoOp[this.state.sexos].genero}
            Escolaridade: ${this.state.escolaridadeOp[this.state.escolaridade].e}
            ${(this.state.nacionalidade) ? "Brasileiro: SIM" : "Brasileiro: NÃO"}
            Limite: ${this.state.limite}
          `
      })
    } 
  }


  render() {

    let opSexo = this.state.sexoOp.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.genero} />
    })

    let opEscolaridade = this.state.escolaridadeOp.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.e} />
    })

    return (
      <View style={styles.container}>
         <ScrollView>
            <Text style= {{marginBottom: 20, marginTop: 80 , alignSelf: 'center'}}>Abertura de conta</Text>
      
            <TextInput 
              placeholder="Nome:"
              style={styles.input}
              onChangeText={(text) => this.setState({nome: text})}
            />
      
          <TextInput 
              placeholder="Idade: "
              style={styles.input}
              onChangeText={(age) => this.setState({idade: age})}
              keyboardType='numeric'
          />

          <Text style={{alignSelf: 'center', marginTop: 30}}> 
            Gênero:
          </Text>

          <Picker 
            selectedValue={this.state.sexos}
            onValueChange={(itemValue,itemIndex) => this.setState({sexos: itemValue})}>
              {opSexo}
          </Picker>

          <Text style={{alignSelf: 'center'}}> 
            Escolaridade:
          </Text>

          <Picker 
            selectedValue={this.state.escolaridade}
            onValueChange={(item, index) => {this.setState({escolaridade: item})}}>
              {opEscolaridade}
          </Picker>
      
          <Text style={{alignSelf: 'center', }}> 
            Limite:
          </Text>

          <Slider
            minimumValue={10}
            maximumValue={1000}
            step={10}
            value={this.state.limite}
            onValueChange={(valor) => this.setState({limite: valor})}
          />

          <Text style={{alignSelf: 'center', marginTop: 30}}> 
            Brasileiro?
          </Text>

          <Switch 
            style={{alignSelf: 'center', marginTop: 10, marginBottom: 40}}
            value={this.state.nacionalidade}
            onValueChange={ (valorNacionalidade) => this.setState({nacionalidade: valorNacionalidade})}
          />

          <Button
            title='CONFIRMAR'
            onPress={this.retorno}
          />

          <Text style={{alignSelf: 'center', marginTop: 30, marginBottom: 30}}>
            {this.state.retorno}
          </Text>

          
        </ScrollView>
      </View>
    );
  }
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

export default App;
