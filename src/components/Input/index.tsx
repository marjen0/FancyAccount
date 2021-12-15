import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

export interface ITextInputProps extends TextInputProps {}
console.log('a');
const TextInput = (props: ITextInputProps) => {
  return <RNTextInput {...props} />;
};

export default TextInput;
