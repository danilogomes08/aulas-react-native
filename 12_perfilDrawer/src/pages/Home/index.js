import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 
export default function Home() {
  const navigation = useNavigation();
 return (
    <View style={styles.container}>
        <Text style={{marginBottom: 30}}>Home</Text>

        <Text style={{marginBottom: 30}}>Para mais informações acessar o menu ao lado</Text>


    <TouchableOpacity style={styles.btn} onPress={ () => navigation.toggleDrawer() }>
        <FontAwesome name='arrow-circle-left' size={25} color='#FFF' />
        <Text style={styles.btnText}>Abrir menu</Text>
    </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btn:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#8A2BE2',
      borderRadius: 5,
    },
    btnText:{
      paddingLeft: 10,
      color: '#FFF'
    }
  })
  