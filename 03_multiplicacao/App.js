import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    numero01: 0,
    numero02: 0,
    resultado: 0
    };

    this.calcular = this.calcular.bind(this);
    this.numero01 = this.numero01.bind(this);
    this.numero02 = this.numero02.bind(this);
  }

  calcular() {
    this.setState ({
      resultado: this.state.numero02 * this.state.numero01
    })
  }

  numero01(numero1) {
    this.setState ({
      numero01: numero1
    })
  }

  numero02(numero2) {
    this.setState ({
      numero02: numero2
    })
  }

  render(){
      return(
        <View style={styles.container}>
          <Text>
            Multiplicar 2 números:
          </Text>

          <TextInput 
            placeholder="Primeiro número: "
            keyboardType="numeric"
            style={styles.input}
            onChangeText={this.numero01}
          />

          <TextInput 
            placeholder="Segundo número: "
            keyboardType="numeric"
            style={styles.input}
            onChangeText={this.numero02}
          />

          <Button title="Calcular" 
            onPress={this.calcular}
          />

          <Text>
            Resultado: {this.state.resultado}
          </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#f5c2d4',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
});

export default App;
