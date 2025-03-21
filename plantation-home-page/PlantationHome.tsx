import * as React from 'react';
import { StyleSheet ,SafeAreaView, Image} from 'react-native';
import PlantationLeftHeader from './PlantationLeftHeader';
import PlantationRightHeader from './PlantationRightHeader';
const PlantationHome = () => {
  return (
    
    <SafeAreaView>
      <PlantationLeftHeader/>
      <PlantationRightHeader/>
    </SafeAreaView>
  );
};

export default PlantationHome;

const styles = StyleSheet.create({
  container: {}
});
