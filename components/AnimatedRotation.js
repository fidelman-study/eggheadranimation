import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
} from 'react-native';

class AnimatedColor extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start();
  }
  
  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    });

    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Spinner</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100
  },
  text: {
    color: '#fff'
  }
});

export default AnimatedColor;