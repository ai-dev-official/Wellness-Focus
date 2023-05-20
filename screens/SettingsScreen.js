import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Pressable,
} from 'react-native';
import HomeImage from '../assets/s.jpg';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground source={HomeImage} style={styles.backgroundImage}>
        <View style={styles.items}>
          <View style={styles.textContainer}>
            <Text style={styles.textA}>Rest and Recovery</Text>
            <Text style={styles.textB}>
              Allow your body ample time to rest and recover between workouts to
              prevent injury and optimize muscle repair and growth.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  text: {
    color: 'red',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: '50%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 20,
  },
  buttonsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    marginTop: 300,
    marginBottom: 250,
    paddingHorizontal: 20,
  },
  textA: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: 700,
    lineHeight: 60,
  },
  textB: {
    fontSize: 18,
    color: '#ffffff',
    lineHeight: 24,
    fontWeight: 700,
  },
});

export default SettingsScreen;
