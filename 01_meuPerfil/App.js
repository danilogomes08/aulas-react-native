import { auto } from 'async';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class App extends Component {
  render() {
    let img = 'https://avatars.githubusercontent.com/u/75504802?s=400&u=5a2a5d517a0c49fa68053cf6517c76fbdc6386bc&v=4';
    let name = 'Danilo Gomes';
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{color:'#836FFF', fontSize: 30, marginTop: 100}}>
        {name}
        </Text>
        <Image
          source={{uri: img}}
          style= {{width: 300, height: 300, borderRadius: 200, margin: 20}}
        />
        <Text>
          Idade: 28
        </Text>
        <Text>
          Formação: Sistemas para Internet (em formação)
        </Text>
        <Text>
          Signo: Leão (isso é muito importante saber)
        </Text>
        <Text>
          Aspirante Desenvolvedor Front end em crescimento
        </Text>
        <Text>
          Algns projetos feitos: https://github.com/danilogomes08
        </Text>
      </View>
    )
  }
}

export default App;