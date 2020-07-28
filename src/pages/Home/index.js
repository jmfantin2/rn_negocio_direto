import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AnnouncementList from 'components/AnnouncementList';
import { deleteUser } from 'utils';
import { colors, strings } from 'general';

import { AntDesign, Entypo } from '@expo/vector-icons';

export default function Home(props) {
  const [footerOption, setFooterOption] = useState(1);
  return (
    <>
      {footerOption === 1 && <AnnouncementList navigation={props.navigation} />}
      <View style={custom.footer}>
        <TouchableOpacity onPress={() => setFooterOption(0)}>
          <Entypo
            name="folder"
            size={42}
            color={footerOption === 0 ? colors.noticeBlue : colors.light}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AnnouncementCreation')}
        >
          <AntDesign name="plussquareo" size={42} color={colors.ruralGreen} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFooterOption(1)}>
          <AntDesign
            name="appstore1"
            size={42}
            color={footerOption === 1 ? colors.noticeBlue : colors.light}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const custom = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderTopWidth: 1,
    borderTopColor: colors.light,
  },
});

Home.navigationOptions = ({ navigation }) => {
  return {
    title: `${strings.CLIENT_TITLE}`,
    headerBackTitleVisible: true,
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          deleteUser().then(() => {
            navigation.navigate('AuthLoading');
          })
        }
        style={{ marginRight: 10 }}
      >
        <Text style={{ color: colors.white }}>{strings.EXIT}</Text>
      </TouchableOpacity>
    ),
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
