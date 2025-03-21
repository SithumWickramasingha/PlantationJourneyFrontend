import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import PlantationHome from './plantation-home-page/PlantationHome';
import PlantationDownPage from './plantation-home-downpage/PlantationDownPage';
const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Image source={require('./assets/teaState.jpeg')} style={styles.backgroundImage} />
        <PlantationHome/>
        <PlantationDownPage/>
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
  backgroundImage:{
    width:'100%',
    height:'48%',
    zIndex:-1,
  }
});
