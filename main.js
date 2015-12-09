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
  StatusBarIOS,
  Component,
  Navigator,
} = React;

const store = createStore(filterReducer);

export default class Reactive2015 extends Component {
  componentDidMount() {
    if (StatusBarIOS) {
      StatusBarIOS.setStyle('light-content');
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
            renderScene={this.renderScene}
            initialRoute={{ component: ScheduleScreen, }}/>
        )}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => Reactive2015);
