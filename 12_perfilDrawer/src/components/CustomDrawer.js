import React from 'react';
import { View, Text} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
export default function CustomDrawer(props){
    let user = "Danilo Gomes";
  return(
    <DrawerContentScrollView {...props} >
      <View style={{
      width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',
      marginTop: 25
      }}>
        <FontAwesome name='user' size={35} color='#8A2BE2'/>
        <Text style={{color: '#8A2BE2', fontSize: 17, marginTop: 5}}>
          Bem-vindo!
        </Text>
        <Text style={{fontSize: 23}}>
            {user}
        </Text>
      </View>
 
      <DrawerItemList {...props} />
 
    </DrawerContentScrollView>
  );
}
