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
import { Button, Chip, Card, Paragraph, Title } from 'react-native-paper';
import { MiniPlayer, StepIndicator, LocationHeader } from 'components/common';
import { CattleSummary, PriceInteractor } from 'components/AnnouncementDetail';
import api from '../../services/ann';
import videoTest from '../../../assets/video.mp4';

import { colors } from 'general';

export default function ExpiredDetail({ navigation }) {
  const id = navigation.getParam('id');
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
          {announcement.picture ? (
            <MiniPlayer
              media={{
                video: videoTest,
                image: announcement.picture.originalUrl,
              }}
            />
          ) : (
            <ActivityIndicator size="large" color={colors.noticeBlue} />
          )}
        </Card.Content>
      </Card>
      <Card style={[custom.el, custom.card]}>
        <Card.Content>
          {announcement.currentPrice ? (
            <PriceInteractor price={announcement.currentPrice} />
          ) : (
            <ActivityIndicator size="large" color={colors.noticeBlue} />
          )}
        </Card.Content>
      </Card>
      <Card style={[custom.el, custom.card]}>
        <Card.Content>
          {announcement.location ? (
            <LocationHeader
              city={announcement.location.city}
              uf={announcement.location.state}
            />
          ) : (
            <ActivityIndicator size="large" color={colors.meatRed} />
          )}
          {announcement ? <CattleSummary ann={announcement} /> : null}
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
