import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native';
import btnStyle from './styles/styles';

const ButtonCustom = ({
  children,
  title,
  textColor = 'white',
  onPressHandler,
  colorTheme = 'blue',
  style,
  size = 'medium',
  disabled = false,
}) => {
  const [isPressed, setisPressed] = useState(false);
  const { styles, underlayTheme } = btnStyle(colorTheme, size);

  const defaultOnPressHandler = () => {
    console.warn('No Handler Defined');
  }

  const touchableProps = {
    activeOpacity: 1,
    onHideUnderlay: () => setisPressed(false),
    onShowUnderlay: () => setisPressed(true),
    style: isPressed
      ? {
          ...styles.buttonPressed,
          ...style,
        }
      : {
          ...styles.buttonNotPressed,
          ...style,
        },
    onPress: onPressHandler ?? defaultOnPressHandler,
    underlayColor: underlayTheme,
  };

  const disabledProps = {
    activeOpacity: 1,
    style: {
      ...styles.buttonDisabled,
    },
  };

  if (disabled) {
    if (isPressed) {
      setisPressed(false);
    }

    return (
      <View
        style={{
          ...styles.wrapperNotPressed,
          ...style,
        }}
      >
        <TouchableHighlight {...disabledProps}>
          {children ? (
            children
          ) : (
            <Text style={{ ...styles.textStyle }}>{title}</Text>
          )}
        </TouchableHighlight>
      </View>
    );
  }

  return (
    <View
      style={
        isPressed
          ? {
              ...styles.wrapperPressed,
              ...style,
            }
          : {
              ...styles.wrapperNotPressed,
              ...style,
            }
      }
    >
      <TouchableHighlight {...touchableProps}>
        {children ? (
          children
        ) : (
          <Text style={{ ...styles.textStyle, color: textColor }}>{title}</Text>
        )}
      </TouchableHighlight>
    </View>
  );
};

export default ButtonCustom;
