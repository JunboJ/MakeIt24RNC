import React from 'react';
import { View } from 'react-native';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import constants from '../../constants/constants';
import { Icon } from 'react-native-elements';

const GameHeader = ({ navigation }) => {
  return (
    <View style={{ marginTop: 90 }}>
      <ButtonCustom
        colorTheme="lightWarning"
        size="small"
        onPressHandler={() => {
          navigation.goBack();
        }}
      >
        <Icon
          name="chevron-left"
          size={25}
          color={constants.colorPalette.rnSet3.red}
        />
      </ButtonCustom>
    </View>
  );
};

export default GameHeader;
