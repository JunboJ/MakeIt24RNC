import React, { useCallback } from 'react';
import { View } from 'react-native';

import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import constants from '../../constants/constants';

const UserHeader = ({ navigation }) => {
  const onBackPressedHandler = useCallback(() => {
    navigation.navigate({ routerName: 'Home' });
  }, []);

  return (
    <View>
      <ButtonCustom
        size="smal"
        title="Back"
        colorTheme="lightWarning"
        textColor={constants.colorPalette.rnSet3.white}
        onPressHandler={onBackPressedHandler}
      />
    </View>
  );
};

export default UserHeader;
