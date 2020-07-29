import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-paper';
import { MiniPlayer, StepIndicator, LocationHeader } from 'components/common';
import { CattleSummary } from 'components/AnnouncementDetail';
import { FinalPrices, SellerStatus } from 'components/ExpiredDetail';
import api from '../../services/ann';
import videoTest from '../../../assets/video.mp4';

import { colors } from 'general';

import { mockedDetail } from 'helpers/CattleUtility/constants';

export default function ExpiredDetail({ navigation }) {
  const id = navigation.getParam('id');

  /* USELESS WHEN MOCKING
  const [announcement, setAnnouncement] = useState({});

  useEffect(() => {
    async function retrieveAnnouncement() {
      try {
        console.log('essa iD', id);
        const retrieved = await api.get(`/api/v1/announcements/${id}`);
        console.log('ret data:', retrieved.data);
        setAnnouncement(retrieved.data);
      } catch (e) {
        console.log('Erro:', e);
      }
      // setData(ads.items);
      // console.log(ads.items)
    }

    retrieveAnnouncement();
  }, []);
  */

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <StepIndicator
        status="expired"
        highlight={colors.noticeBlue}
        label={'O anúncio já terminou'}
        style={custom.el}
      />
      <Card style={[custom.el, custom.card]}>
        <Card.Content>
          {mockedDetail.currentPrice ? (
            <FinalPrices price={mockedDetail.currentPrice} />
          ) : (
            <ActivityIndicator size="large" color={colors.noticeBlue} />
          )}
        </Card.Content>
      </Card>
      <Card style={[custom.el, custom.card]}>
        <SellerStatus />
      </Card>
      <Card style={[custom.el, custom.card]}>
        <Card.Content>
          {mockedDetail.picture ? (
            <MiniPlayer
              media={{
                video: videoTest,
                image: mockedDetail.picture.originalUrl,
              }}
            />
          ) : (
            <ActivityIndicator size="large" color={colors.noticeBlue} />
          )}
        </Card.Content>
      </Card>
      <Card style={[custom.el, custom.card]}>
        <Card.Content>
          {mockedDetail.location ? (
            <LocationHeader
              city={mockedDetail.location.city}
              uf={mockedDetail.location.state}
            />
          ) : (
            <ActivityIndicator size="large" color={colors.meatRed} />
          )}
          {mockedDetail ? <CattleSummary ann={mockedDetail} /> : null}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const screenW = Dimensions.get('window').width;
const custom = StyleSheet.create({
  el: {
    marginBottom: 16,
  },
  card: {
    width: screenW - 32,
  },
});

ExpiredDetail.navigationOptions = ({ navigation }) => {
  return {
    title: 'Detalhes do Anúncio',
    headerBackTitleVisible: false,
  };
};

ExpiredDetail.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
