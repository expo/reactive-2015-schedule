import React from 'react-native';
import RadioButtons from './'
import assign from 'object-assign';

const {
  Text,
  TouchableWithoutFeedback,
  View,
} = React;

class SegmentedControls extends React.Component {

  render(){
    const config = this.getConfig();

    return (
      <RadioButtons {...this.props}
        renderOption={ this.renderOption.bind(this, config) }
        renderContainer={ this.renderContainer.bind(this, config) }
      />
    )
  }

  getConfig(){
    const tint = this.props.tint || DEFAULTS.tint;
    const backTint = this.props.backTint || DEFAULTS.backTint;
    const colors = {
      tint: tint,
      selectedTint: backTint,
      backgroundColor: 'transparent',
      selectedBackgroundColor: tint,
      containerBorderTint: tint,
      separatorTint: tint,
    };
    return assign({}, DEFAULTS, colors, this.props);
  }

  renderContainer(config, options){
    const containerStyle = {
      flexDirection: config.direction,
      backgroundColor: config.backgroundColor,
      borderColor: config.containerBorderTint,
      borderWidth: config.containerBorderWidth,
      borderRadius: config.containerBorderRadius,
      justifyContent: 'center',
      flex: 1,
      overflow: 'hidden',
    };

    return (
      <View style={containerStyle}>
        {options}
      </View>
    );
  }

  renderOption(config, option, selected, onSelect, index){

    const baseStyle = {
      textAlign: config.textAlign,
    };

    const selectedStyle = [baseStyle, this.props.optionStyle, {
      color: config.selectedTint,
      backgroundColor: config.selectedBackgroundColor,
    }];

    const baseOptionContainerStyle = {
      flex: 1,
      backgroundColor: selected ? IOS_BLUE : 'transparent',
    };

    const normalStyle = [baseStyle, this.props.optionStyle, {
      color: config.tint,
      backgroundColor: config.backgroundColor,
    }];

    const borderStyles = config.direction === 'row' ?
      {
        borderLeftWidth: config.separatorWidth,
        borderLeftColor: config.separatorTint,
      } : {
        borderTopWidth: config.separatorWidth,
        borderTopColor: config.separatorTint,
      };

    const separatorStyle = [baseOptionContainerStyle, borderStyles, {backgroundColor: selected ? IOS_BLUE : 'transparent'}];

    const style = selected ? selectedStyle : normalStyle;

    const label = this.props.extractText ? this.props.extractText(option) : option;

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <View style={index > 0 ? separatorStyle : baseOptionContainerStyle}>
          <Text style={[style, {margin: 5}]}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const IOS_BLUE = '#007AFF';
const IOS_WHITE = '#ffffff';

const DEFAULTS = {
  direction: 'row',

  tint: IOS_BLUE,
  backTint: IOS_WHITE,

  paddingTop: 5,
  paddingBottom: 5,
  textAlign: 'center',

  selectedTint: IOS_WHITE,
  selectedBackgroundColor: IOS_WHITE,

  separatorTint: IOS_BLUE,
  separatorWidth: 1,

  containerBorderTint: IOS_BLUE,
  containerBorderWidth: 1,
  containerBorderRadius: 5,

};
export default SegmentedControls;
