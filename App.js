// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Please be patience till this app is ready for you in your IOS device',
  android:
  'Please be patience till this app is ready for you in your Android device',
});

type Props = {};
class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>🙏 {this.state.text} 🙏</Text>
        {/* <Text></Text> */}
        <Text style={styles.welcome}>Welcome to Passenger App!</Text>
        {/* <View style={styles.btn_grp}> */}
        <Text style={styles.instructions}>The app is in development process...</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput style={{fontSize: 20, textAlign: 'center' }} placeholder="your name" onChangeText={(text) => this.setState({text})}></TextInput>
        <Text></Text>
        <Button style={styles.enter} title="Let's go" onPress={
          () => {
            Alert.alert('We\'ll update it soon....');
          }
        }>
        </Button>
        <Text></Text>
        <Button style={styles.enter} title="show map" onPress={
          () => this.props.navigation.navigate('Map')
        }></Button>
        {/* </View> */}
      </View>
    );
  }
}

class MapScreen extends Component<Props> {
  render() {
    return (
      // <Text style={styles.center}>We're developing Map API</Text>
      <View style={styles.container}> 
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 9.88288,
          longitude: 78.0831093,
          latitudeDelta: 0.004,
          longitudeDelta: 0.002
        }}      
        showsUserLocation={true}      // 9.88288,78.0831093
      >
      </MapView>
      </View>
    );
  }
}

const RootStack =createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component<Props> {
  render() {
    return <AppContainer style={styles.container}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#15FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
    // marginLeft: 5,
    // marginRight: 5,
    margin: 10,
    color: 'green',
  },
  ccenter: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enter: {
    margin: 20,
    height: 50,
    width: 150,
    flex: 1,
    flexDirection: 'row'
  },
  btn_grp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    // flex: 1,
    // width: 400,
    // height: 500,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  }
});
