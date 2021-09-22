import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      cambio01: 0,
      cambio02: 0,
    }

    this.converter = this.converter.bind(this)
  }

  converter() {
    let moeda01 = 0;
    let moeda02 = 0;
    let valor = this.state.valor;

    switch (this.state.cambio01) {
      case 1:
        moeda01 = 5.28;
        break;
      case 2:
        moeda01 = 6.19;
        break;
      case 3:
        moeda01 = 1;
        break;
    }
    switch (this.state.cambio02) {
      case 1:
        moeda02 = 5.28;
        break;
      case 2:
        moeda02 = 6.19;
        break;
      case 3:
        moeda02 = 1;
        break;
    }
    var x = (moeda01 * valor) / moeda02;
    this.setState({resultado: x.toFixed(2)})
      
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Conversor de Moedas</Text>


          <TextInput
            placeholder="valor: "
            style={styles.input}
            onChangeText={(moeda) => this.setState({valor: moeda})}
          />

          <Text style={styles.text}>
            De:
          </Text>

          <Picker
            selectedValue={this.state.cambio02}
            onValueChange={(item, index) => this.setState({cambio02: item})}
          >
            <Picker.Item key={1} value={1} label="Dólar" />
            <Picker.Item key={2} value={2} label="Euro" />
            <Picker.Item key={3} value={3} label="Real" />

          </Picker>

          <Text style={styles.text}>
            Para:
          </Text>

          <Picker
            selectedValue={this.state.cambio01}
            onValueChange={(item, index) => this.setState({cambio01: item})}
          >
            <Picker.Item key={1} value={1} label="Dólar" />
            <Picker.Item key={2} value={2} label="Euro" />
            <Picker.Item key={3} value={3} label="Real" />

          </Picker>

        <Button
          title="CONVERTER"
          onPress={this.converter}
        />

        <Text style={styles.text}>
          {this.state.resultado}
        </Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
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
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10
  }
});

export default App;
