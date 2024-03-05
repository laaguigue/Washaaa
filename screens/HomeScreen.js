import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook


export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      navigation.navigate('LaunchScreen'); // Navigate to the LaunchScreen
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);                                           

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/logo.png")} 
        style={styles.logo}
        resizeMode="contain"/>
      <ActivityIndicator size={40} color="white" speed={0.9} style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1691fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300, 
    height: 300, 
  },
  spinner: {
    marginTop: 20,
  },
});
