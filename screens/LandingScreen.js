import React from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import DialButton from '../components/DialButton';
import HomeImage from '../assets/l.jpg';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground source={HomeImage} style={styles.backgroundImage}>
        <DialButton />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default LandingScreen;
