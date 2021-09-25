import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

 
export default function Experiencia() {
 return (
    <View style={styles.container}>
        <Text style={{marginBottom: 30}}>Experiencia</Text>

        <Text>
            HTML
        </Text>
        <Text>
            CSS
        </Text>
        <Text>
            JavaScript
        </Text>
        <Text>
            BootStrap
        </Text>
        <Text>
            Angular
        </Text>
        <Text style={{marginBottom: 30}}>
            WordPress
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