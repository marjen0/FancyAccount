import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import {useTheme} from '@context';
import {getStyles} from './styles';

interface ITextInputProps extends TextInputProps {
  error?: boolean;
}

const TextInput = ({error, ...props}: ITextInputProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const borderStyle = {
    borderColor: error ? theme.colors.error : theme.colors.border,
  };

  return <RNTextInput style={[styles.input, borderStyle]} {...props} />;
};

export default TextInput;
