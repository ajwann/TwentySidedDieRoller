import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  Easing,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNShakeEvent from 'react-native-shake-event';


export default class TwentySidedDieRoller extends Component {
  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      this.setState({ number: this.getNumber() });
      /*
      this.state = { spinValue: new Animated.Value(10) };

      let spin = this.state.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

      Animated.timing(
          this.state.spinValue,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear
        }
      ).start()
        
      this.setState({ spin: spin,
                      number: getNumber(),
                      spinValue: new Animated.Value(1)
                   });
      });
      */
    });
  }
 
  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  constructor(props) {
    super(props);
    this.state = { number: this.getNumber() };
    /* this.state = { spinValue: new Animated.Value(5) };

    let spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    Animated.timing(
        this.state.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start()

    this.state = { spin: spin,
                   number: getNumber(),
                   spinValue: new Animated.Value(5)
                 };
    */

  }

  getNumber() {
    let max = 21;
    let min = 1;
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={{ //opacity: this.state.fadeAnim, 
                                fontSize: 160,
                                textAlign: 'center'//,
                                //transform: [{rotate: this.state.spin}] 
                             }}>
          ◆
        </Animated.Text>
        <Text style={styles.number}>
          { this.state.number } 
        </Text>
        <Text style={styles.instructions}>
          To roll, just shake your device.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  diamond: {
    fontSize: 160,
    textAlign: 'center',
    marginBottom: -200,
    marginTop: 200 
  },

  number: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: -120,
    marginBottom: 120,
    color: 'white'
  }
});

AppRegistry.registerComponent('TwentySidedDieRoller', () => TwentySidedDieRoller);
