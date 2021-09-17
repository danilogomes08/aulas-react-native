import React, { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    this.setState ({
      valor: this.state.valor + 1
    })
  }

  diminuir() {
    if (this.state.valor > 0) {
      this.setState ({
        valor: this.state.valor - 1
      })
    } else {
      valor: 0
    }
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>
        Quantidade: {this.state.valor}
      </Text>
      <Button title="+" onPress={this.aumentar} />
      <Button title="-" onPress={this.diminuir} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default App;