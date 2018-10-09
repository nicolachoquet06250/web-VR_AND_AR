import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class Hello360 extends React.Component {

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
            <iframe src="http://www.youtube.com/embed/xDMP3i36naA">erreur</iframe>
          {/*<Text style={styles.greeting}>*/}
            {/*Welcome to React 360*/}
          {/*</Text>*/}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);