import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Stat from './Stat';
import Slide from './Slide';
import styles from './styles';

const Carousel = ({items, style, itemsPerInterval}) => {
  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const itemsPerInt = itemsPerInterval === undefined ? 1 : itemsPerInterval;

  const init = w => {
    setWidth(w);
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInt));
  };

  const getInterval = offset => {
    for (let i = 1; i < intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{...styles.bullet, opacity: interval === i ? 0.5 : 0.1}}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {items.map((item, i) => {
          switch (style) {
            case 'stats':
              return <Stat key={i} label={item.label} value={item.value} />;
            default:
              return <Slide key={i} title={item.title} />;
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

export default Carousel;
