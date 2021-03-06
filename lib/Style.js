var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var Style = StyleSheet.create({
  radioForm: {
  },

  radioWrap: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 30,
    height: 30,


    alignSelf: 'center',

    borderColor: '#2196f3',
    borderRadius: 30,
  },

  radioLabel: {
    paddingLeft: 7,
    //lineHeight: 35,
    marginVertical: 6,
    fontSize: 18,
    color:'#414141',
    fontFamily: 'avenir',
  },

  radioLabelWide: {
    paddingLeft: 7,
    //lineHeight: 35,
    marginVertical: 10,
    fontSize: 18,
    color:'#414141',
    fontFamily: 'avenir',
  },

  radioNormal: {
    borderRadius: 10,
  },

  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: '#2196f3',
  },

  labelWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    //borderBottomWidth: 1,
    //borderBottomColor: 'lightgray'
  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 10,
  },

  labelVertical: {
    paddingLeft: 0,
  },

  formHorizontal: {
    flexDirection: 'row',
  },
});

module.exports = Style;
