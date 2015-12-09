const { Dimensions, Platform } = require('react-native');
const screen = Dimensions.get('window');

const colors = {
  primary: '#283046',
  secondary: '#212739',
  accent: '#1bd982',
  text: '#111',
  lightText: '#333',
  white: '#fff',

  blue: '#3498db',
  purple: '#9b59b6',
  green: '#2ecc71',
  yellow: '#f1c40f',
};

module.exports = {
  colors,

  fullscreen: {
    width: screen.width,
    height: screen.height,
  },

  header: {
    backgroundColor: colors.primary,
    height: 65,
    paddingTop: Platform.OS === 'ios' ? 0 : 35,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  title: {
    fontWeight: '500',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 2,
  },

  textBlock: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    color: colors.lightText,
  },

  caption: {
    color: colors.accent,
    flex: 1,
    fontSize: 16,
    paddingTop: 34,
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },

  prevBtnContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 36,
    width: 36,
    top: Platform.OS === 'android' ? 30 : 26,
    left: 10,
    justifyContent: 'center',
  },

  detailsHeader: {
    height: Platform.OS === 'android' ? 75 : 65,
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
  },

  nextBtnContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 36,
    width: 36,
    top: Platform.OS === 'android' ? 28 : 26,
    right: 10,
    justifyContent: 'center',
  },

  btn: {
    height: 28,
    width: 28,
    tintColor: colors.accent,
  },

  segmented: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    tintColor: colors.accent,
  },

  social: {
    width: 32,
    height: 32,
  },

  socialContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
};
