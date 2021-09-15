import React from 'react';
import {View, Text} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const Test = () => {
  return (
    <View>
      <StickyParallaxHeader
        headerType="TabbedHeader"
        parallaxHeight={90}
        foreground={() => {}}
      />
    </View>
  );
};

export default Test;
