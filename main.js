const HOST = 'https://s3-us-west-2.amazonaws.com/examples-exp/reactive/';
window.requireImage = function(name) {
  return {
    uri: HOST + name.replace('image!', '') + '.png',
  }
}

const theme = require('./components/theme');
const { createStore, applyMiddleware, bindActionCreators } = require('redux');
const { Provider } = require('react-redux/native');
const ScheduleScreen = require('./screens/Schedule');
const filterReducer = require('./reducers/filter');
const React = require('react-native');
const {
  AppRegistry,
  BackAndroid,
  StatusBarIOS,
  Component,
  Platform,
  Navigator,
} = React;

const store = createStore(filterReducer);

export default class Reactive2015 extends Component {
  componentDidMount() {
    if (StatusBarIOS) {
      StatusBarIOS.setStyle('light-content');
    }

    if (BackAndroid) {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        if (this._navigator.getCurrentRoutes().length > 1) {
          this._navigator.pop();
          return true;
        }

        return false;
      });
    }
  }

  renderScene(route, navigator) {
    const RouteComponent = route.component;

    return (
      <RouteComponent
        style={{ flex: 1, }}
        navigator={navigator}
        route={route} />
    );
  }

  render() {
    return (
      <Provider store={store}>
        {() => (
          <Navigator
            ref={(view) => { this._navigator = view; }}
            configureScene={this.configureScene}
            renderScene={this.renderScene}
            initialRoute={{ component: ScheduleScreen, }}/>
        )}
      </Provider>
    );
  }

  configureScene(route) {
    if (Platform.OS === 'android') {
      return Navigator.SceneConfigs.FadeAndroid;
    } else {
      return Navigator.SceneConfigs.PushFromRight;
    }
  }
}

AppRegistry.registerComponent('main', () => Reactive2015);
