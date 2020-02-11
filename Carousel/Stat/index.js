import React from 'react';
import {View, Text} from 'react-native';

import styles from '../styles';

const Stat = ({label, value}) => {
  return (
    <View style={styles.stat}>
      <Text style={{...styles.slideText}}>{value}</Text>
      <View style={styles.statHold}>
        <Text style={{...styles.statLabel}}>{label}</Text>
      </View>
    </View>
  );
};

export default Stat;
