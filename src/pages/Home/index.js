import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AnnouncementList from 'components/AnnouncementList';
import { deleteUser } from 'utils';
import { colors, strings } from 'general';

import { AntDesign } from '@expo/vector-icons';

export default function Home(props) {
  return (
    <>
      <AnnouncementList navigation={props.navigation} />
      <View style={custom.footer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AnnouncementCreation')}
        >
          <AntDesign name="plussquareo" size={42} color={colors.noticeBlue} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const custom = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingBottom: 8,
    paddingTop: 8,
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
