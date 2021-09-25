import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
 
 
export default function Formacao() {
 return (
    <View style={styles.container}>
        <Text style={{marginBottom: 30}}>Formacão</Text>

        <Text > 
            Ensino Superior em andamento (Fatec Rubens lara)
        </Text>
        <Text style={{marginBottom: 30}}>
            Conclusão: 12/2021
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