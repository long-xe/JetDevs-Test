import React from 'react';
import type {
  ImageSourcePropType,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { View, TextInput, Text } from 'react-native';
import styles from './style';
import { Colors } from '../../styles';
import IconImageButton from '../iconImageButton';


export interface TextFieldProps extends TextInputProps {
  label?: string;
  labelStyle?: object | React.CSSProperties;
  value?: string;
  errorMessage?: string;
  tintColor?: string;
  hint?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  styleContainer?: ViewStyle;
  disabled?: boolean;
  onChangeText?: (value: string, unMaskedValue?: string) => void;
  autoExpand?: boolean;
  onFocus?: () => void;
  onBlur?: (e: any) => void;
  onPressRight?: () => void;
  onPressLeft?: () => void;
  renderLabel?: () => JSX.Element;
  renderLeft?: () => JSX.Element;
  renderRight?: () => JSX.Element;
  containerStyle?: object | React.CSSProperties;
  require?: boolean;
}

const TextField = ({
  label,
  value,
  errorMessage,
  tintColor,
  leftIcon,
  rightIcon,
  placeholder,
  onChangeText,
  style,
  labelStyle,
  styleContainer,
  onFocus,
  onBlur,
  onPressRight,
  onPressLeft,
  numberOfLines,
  renderLabel,
  renderLeft,
  renderRight,
  require,
  hint,
  ...props
}: TextFieldProps) => {
  return (
    <View style={[styles.body, styleContainer]}>
      {renderLabel
        ? renderLabel()
        : label && (
            <View style={styles.flexDirection}>
              <Text>
                {label}
              </Text>
              {require && (
                <Text>
                *
              </Text>
              )}
            </View>
          )}
      <View style={[styles.textField, style, errorMessage ? styles.error : {}]}>
        {renderLeft
          ? renderLeft()
          : leftIcon && (
              <IconImageButton
                name={leftIcon}
                onPress={onPressLeft}
                style={styles.leftIcon}
                tintColor={tintColor}
              />
            )}

        <TextInput
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholderTextColor={Colors.stroke}
          placeholder={placeholder}
          style={styles.input}
          onFocus={onFocus}
          numberOfLines={numberOfLines}
          {...props}
        />
        {renderRight
          ? renderRight()
          : rightIcon && (
              <IconImageButton
                name={rightIcon}
                onPress={onPressRight}
                style={styles.rightIcon}
                tintColor={tintColor}
              />
            )}
      </View>
      {hint && (
        <Text>
          {hint}
        </Text>
      )}
      {errorMessage && (
        <Text
          style={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
export default TextField;
