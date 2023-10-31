import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CountdownTimerWidget = ({ endDate, bgColor, textColor, fontSize, border, includeAnimationEffect }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance %(100*60*60))/ (100*60));
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <View style={{ backgroundColor: bgColor, color: textColor, fontSize: fontSize, border: border }}>
      <Text>{timeRemaining}</Text>
    </View>
  );
};

export default CountdownTimerWidget;
