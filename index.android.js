/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
/* components */
import AnimatedBasic from './components/AnimatedBasic';
import AnimatedScale from './components/AnimatedScale';
import AnimatedPan from './components/AnimatedPan';
import AnimatedColor from './components/AnimatedColor';
import AnimatedRotation from './components/AnimatedRotation';
import AnimatedSequence from './components/AnimatedSequence';

AppRegistry.registerComponent('eggheadanimation', () => AnimatedSequence);
