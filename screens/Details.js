const React = require('react-native');
const ScheduleItem = require('../components/ScheduleItem');
const Profile = require('../components/Profile');
const theme = require('../components/theme');
const { SegmentedControls } = require('../vendor/react-native-radio-buttons');
const {
  Component,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  SegmentedControlIOS,
  Platform,
  InteractionManager,
} = React;

module.exports = class DetailsScreen extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      selected: 0,
      renderPlaceholderOnly: true,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      requestAnimationFrame(() =>
        this.setState({
          renderPlaceholderOnly: false,
        })
      );
    });
  }

  switchTextContent(index) {
    this.setState({
      selected: index,
    });
  }

  render() {
    const { data } = this.props.route;

    if (this.state.renderPlaceholderOnly) {
      return (
        <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
        </View>
      );
    }

    const content = this.state.selected ?
      <Profile {...data} /> :
      <View>
        <Text style={theme.title}>Overview:</Text>
        <Text style={theme.textBlock}>{data.excerpt}</Text>
      </View>;

    let options = ['Talk', 'Profile', ];

    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.white, }}>
        <View>
          <View style={[theme.header, theme.detailsHeader]}>
            <Text ref={'title'} style={theme.caption}>TALK DETAILS</Text>
          </View>

          <TouchableOpacity
            style={[theme.prevBtnContainer, { left: 0, }, ]}
            onPress={() => this.props.navigator.pop()}>
            <Image
              source={requireImage('ios7-arrow-back')}
              style={[theme.btn, { width: 36, height: 36, }, ]}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <ScheduleItem {...data} />
          <View style={{marginHorizontal: 20, marginVertical: 10}}>
            <SegmentedControls
              options={options}
              selectedOption={options[this.state.selected]}
              onSelection={(option) => { this.switchTextContent(options.indexOf(option)); }}
            />
          </View>
          <View style={{padding: Platform.OS === 'android' ? 20 : 0 }}>
            {content}
          </View>
        </ScrollView>
      </View>
    );
  }
};
