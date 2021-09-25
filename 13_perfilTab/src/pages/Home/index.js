import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
 
export default function Home() {
 return (
    <View style={styles.container}>
        <Text style={{marginBottom: 30}}>Home</Text>

        <Text style={{marginBottom: 30}}>Para mais informações acessar a navegação abaixo</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  })