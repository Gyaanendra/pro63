import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './header';
import Dis from './asdadassad';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Header/>
       <Dis/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343F56',
  },
});

