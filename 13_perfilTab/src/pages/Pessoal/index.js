import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
 
 
export default function Pessoal() {
  let img = 'https://avatars.githubusercontent.com/u/75504802?s=400&u=5a2a5d517a0c49fa68053cf6517c76fbdc6386bc&v=4';
  let name = 'Danilo Gomes';
 return (
    <View style={styles.container}>
        <Text style={{marginBottom: 30}}>Pessoal</Text>

        <Image
          source={{uri: img}}
          style= {{width: 300, height: 300, borderRadius: 200, margin: 20}}
        />

        <Text>
          Nome: {name}
        </Text>
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
        <Text style={{marginBottom: 30}}>
          Algns projetos feitos: https://github.com/danilogomes08
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })