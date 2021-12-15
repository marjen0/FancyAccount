import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import {useTheme} from '../../context';
import {getStyles} from './styles';

interface ITextInputProps extends TextInputProps {}

const TextInput = (props: ITextInputProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return <RNTextInput style={styles.input} {...props} />;
};

export default TextInput;
