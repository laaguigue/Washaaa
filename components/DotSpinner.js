import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';



const DotSpinner = () => {
  const pulse = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1,
        duration: 500, 
        easing: Easing.linear,
        useNativeDriver: false, 

      }),
      Animated.timing(pulse, {
        toValue: 0,
        duration: 500, 
        easing: Easing.linear,
        useNativeDriver: false, 
      }),
    ])
  ).start();


  const dots = Array(8).fill(0);

  return (
    <View style={styles.spinner}>
      {dots.map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              transform: [
                { rotate: `${45 * index}deg` },
                { scale: pulse }, 
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40, 
    height: 40, 
  },
  dot: {
    width: 10, 
    height: 10, 
    backgroundColor: 'black', 
    borderRadius: 5,
    marginHorizontal: 2, 
  },
});

export default DotSpinner;
