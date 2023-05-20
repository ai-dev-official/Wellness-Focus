import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import HomeImage from '../assets/n.jpg';

const BackScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground source={HomeImage} style={styles.backgroundImage}>
        <View style={styles.items}>
          <View style={styles.textContainer}>
            <Text style={styles.textA}>Active Lifestyle</Text>
            <Text style={styles.textB}>
              Incorporate physical activity into your daily routine, such as
              walking, cycling, or dancing, to stay active and improve overall
              fitness.
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
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red'
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
    // backgroundColor: '#f3f3f3',
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

export default BackScreen;
