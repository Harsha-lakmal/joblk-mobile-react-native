import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignUpScreen from './src/screens/LoginScreen/SignUpScreen/SignUpScreen';

function App() {
  return (
    <View style={styles.backgroundStyle}>
      {/* <LoginScreen /> */}
      <SignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  }
 
});

export default App;
