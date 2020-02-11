import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Carousel</Text>
      <Text>Intro Slides Carousel</Text>
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
});
