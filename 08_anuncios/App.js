import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.anuncios}>
            <Image 
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/7128tY0BnEL._AC_SL1449_.jpg'}}
              style={styles.imagens}
            />
            <Text>
              ALBUM: RAY OF LIGHT
            </Text>
            <Text>
              ARTISTA: MADONNA
            </Text>
            <Text>
              VALOR: 50$
            </Text>
            <Text>
              ANO: 1998
            </Text>
          </View>

          <View style={styles.anuncios}>
            <Image 
              source={{uri: 'https://images-americanas.b2w.io/produtos/01/00/img/246070/5/246070578_1GG.jpg'}}
              style={styles.imagens}
            />
             <Text style={styles.text}>
              ALBUM: NORMAN FUCKING ROCKWELL!
            </Text>
            <Text>
              ARTISTA: LANA DEL REY
            </Text>
            <Text>
              VALOR: 50$
            </Text>
            <Text>
              ANO: 2019
            </Text>
          </View>
          <View style={styles.anuncios}>
            <Image 
              source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/0/08/Capa_de_How_Big%2C_How_Blue%2C_How_Beautiful.png'}}
              style={styles.imagens}
            />
             <Text style={styles.text}>
              ALBUM: HOW BIG, HOW BLUE, HOW BEAUTIFUL
            </Text>
            <Text>
              ARTISTA: LANA DEL REY
            </Text>
            <Text>
              VALOR: 50$
            </Text>
            <Text>
              ANO: 2019
            </Text>
          </View>
          <View style={styles.anuncios}>
            <Image 
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/718SP2DEslL._AC_SL1200_.jpg'}}
              style={styles.imagens}
            />
             <Text style={styles.text}>
              ALBUM: ART ANGLES
            </Text>
            <Text>
              ARTISTA: GRIMES
            </Text>
            <Text>
              VALOR: 50$
            </Text>
            <Text>
              ANO: 2015
            </Text>
          </View>
          <View style={styles.anuncios}>
            <Image 
              source={{uri: 'https://universalmusic.vteximg.com.br/arquivos/ids/160664-1000-1000/cd-the-weeknd-after-hours-cd-the-weeknd-after-hours-00602508818387-26060250881838.jpg?v=637233510567270000'}}
              style={styles.imagens}
            />
             <Text style={styles.text}>
              ALBUM: AFTER HOURS
            </Text>
            <Text>
              ARTISTA: THE WEEKND
            </Text>
            <Text>
              VALOR: 50$
            </Text>
            <Text>
              ANO: 2020
            </Text>
          </View>
        </ScrollView>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  anuncios: {
    backgroundColor: '#D8D8D8',
    height: 350,
    width: 250, 
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 20
  }, 
  imagens: {
    height: 150,
    width: 150,
    marginTop: 30,
    marginBottom: 30
  },
  text: {
    textAlign: 'center'
  }
});

export default App;
