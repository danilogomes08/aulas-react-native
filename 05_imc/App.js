import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      imc: ''
    };

    this.peso = this.peso.bind(this);
    this.altura = this.altura.bind(this);
    this.imc = this.imc.bind(this);
  }

  peso(peso) {
    this.setState({
      peso: peso
    })
  }

  altura(altura) {
    this.setState({
      altura: altura
    })
  }

  imc() {
    imc = this.state.peso / (this.state.altura ** 2)
    if(imc < 18.5) {
      this.setState({imc: 'Abaixo do peso'})
    } else if (imc >= 18.5 & imc <= 24.9) {
      this.setState({imc: 'Peso normal'})
    } else if (imc >= 25 & imc <= 29.9) {
      this.setState({imc: 'Sobrepeso'})
    } else if (imc >= 30 & imc <= 34.9) {
      this.setState({imc: 'Obesidade Grau I'})
    } else if (imc >= 35 & imc <= 39.9) {
      this.setState({imc: 'Obesidade Grau II'})
    } else {
      this.setState({imc: 'Obesidade Grau III ou Mórbida'})
    }
  }


  render(){
    return (
      <View style={styles.container}>
        <Image 
        source={{uri:'https://conteudo.imguol.com.br/c/entretenimento/87/2020/10/28/balanca-peso-1603920684761_v2_900x506.jpg.webp'}}
        style= {{width: 200, height: 200, borderRadius: 200, margin: 20}}
        />

        <TextInput
          placeholder="Peso"
          style={styles.input}
          onChangeText={this.peso}
        />

        <TextInput
          placeholder="Altura"
          style={styles.input}
          onChangeText={this.altura}
        />

        <Button 
          title="Calcular"
          onPress={this.imc}
        />

        <Text>
          {this.state.imc}
        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
});

export default App;
