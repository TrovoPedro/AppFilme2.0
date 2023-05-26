
import { FlatList, StyleSheet, Text, View } from 'react-native';

import BannerMovies from './src/components/bannerMovies';
import Filmes from './src/data/filmes';
import Header from './src/components/header';
import Search from './src/components/searchBar';
import CardMovies from './src/components/cardFilmes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <BannerMovies></BannerMovies>

    <View style={{width:'90%'}}>
      <FlatList
      horizontal = {true}
      data = {Filmes}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (

        <CardMovies
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.nota}>
        </CardMovies>
      
      )}
      
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
    
  },
});
