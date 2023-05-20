import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './components/Navigation';


const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
