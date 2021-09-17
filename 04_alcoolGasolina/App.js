import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: 0,
      gasolina: 0,
      vantagem: ''
    };

    this.alcool = this.alcool.bind(this);
    this.gasolina = this.gasolina.bind(this);
    this.vantagem = this.vantagem.bind(this);
  }

  vantagem() {
    if (this.state.alcool / this.state.gasolina > 0.7) {
      this.setState ({vantagem: 'Gasolina é mais vantasojo'})
    } else {
      this.setState ({vantagem: 'Alcool é mais vantasojo'})
    }
  }

  alcool(alcool) {
    this.setState({
      alcool: alcool
    })
  }

  gasolina(gasolina) {
    this.setState({
      gasolina: gasolina
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <Image 
        source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51fDPIzO1kL.png'}}
        style= {{width: 200, height: 200, borderRadius: 200, margin: 20}}
      />

      <TextInput 
        placeholder="Informe o valor da alcool"
        style={styles.input}
        onChangeText={this.alcool}
      />

      <TextInput 
        placeholder="Informe o valor da gasolina"
        style={styles.input}
        onChangeText={this.gasolina}
      />

      <Button 
        onPress={this.vantagem}
        title="Verificar"
      />

      <Text>
        {this.state.vantagem}
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