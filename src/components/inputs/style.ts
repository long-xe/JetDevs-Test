import { StyleSheet } from 'react-native';

import { Colors } from '../../styles';
import { windowDimensions } from '../../utils/dimension';

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    justifyContent: 'center',
  },
  textField: {
    height: windowDimensions.width * 0.11,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.stroke,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  require: {
    textAlignVertical: 'top',
    alignSelf: 'flex-start',
  },
  errorMessage: {
    width: '100%',
    color: Colors.error,
    marginTop: 5,
    marginLeft: 5
  },
  input: {
    color: Colors.black,
    fontSize: 15,
    flex: 1,
    height: '100%',
  },
  leftIcon: {
    width: windowDimensions.width * 0.047,
    height: windowDimensions.width * 0.047,
    resizeMode: 'contain',
    marginRight: 10,
  },
  rightIcon: {
    width: windowDimensions.width * 0.047,
    height: windowDimensions.width * 0.047,
    marginLeft: 10,
    padding: 2,
  },
  error: {
    borderColor: Colors.error,
  },
});

export default styles;
