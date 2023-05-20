import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import HomeImage from '../assets/d.jpg';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground source={HomeImage} style={styles.backgroundImage}>
        <View style={styles.items}>
          <View style={styles.textContainer}>
            <Text style={styles.textA}>Strength Training</Text>
            <Text style={styles.textB}>
              Build strength and tone your muscles with effective resistance
              training exercises, enhancing your overall physical performance.
            </Text>
          </View>
          {/* <View style={styles.buttonsView}>
        <Pressable
              style={[styles.button, {backgroundColor: 'transparent', marginRight: 20}]}
              onPress={()=>Alert.alert("Button Pressed!")}>
              <Text style={[styles.buttonLabel, {color: '#ffffff'}]}>
              Log In
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, {backgroundColor: '#ffffff'}]}
              onPress={()=>Alert.alert("Button Pressed!")}>
              <Text style={[styles.buttonLabel, {color: '#000000'}]}>
              Sign Up
              </Text>
            </Pressable>
        </View> */}
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

export default SearchScreen;
