import React from 'react';
import {View, Text} from 'react-native';

import styles from '../styles';

const Slide = ({title}) => {
  return (
    <View style={styles.slide}>
      <Text style={{...styles.slideText}}>{title}</Text>
    </View>
  );
};

export default Slide;
