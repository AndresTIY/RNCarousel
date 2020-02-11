import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from './Carousel';

const data = [
  {
    label: 'TODAY',
    value: 1,
  },
  {
    label: 'THIS WEEK',
    value: 120,
  },
  {
    label: 'THIS MONTH',
    value: 39,
  },
  {
    label: 'YESTERDAY',
    value: 3,
  },
  {
    label: 'LAST WEEK',
    value: 25,
  },
  {
    label: 'LAST MONTH',
    value: 175,
  },
];

const slideData = [
  {
    title: 'Welcome! Swipe to continue',
  },
  {
    title: 'About Feature X',
  },
  {
    title: 'About Feature Y',
  },
];

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
