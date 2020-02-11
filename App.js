import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from './Carousel';
import {slideData, data} from './config';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Carousel</Text>
      <Carousel style="stats" items={data} itemsPerInterval={3} />
      <Text style={styles.textMargin}>Intro Slides Carousel</Text>
      <Carousel style={'slide'} items={slideData} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textMargin: {
    marginTop: 30,
  },
});
