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

export default function AnnouncementDetail({ navigation }) {
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
        status="active"
        highlight={colors.noticeBlue}
        style={custom.el}
      />
      <Text style={[custom.el, custom.txt]}>Recebendo propostas</Text>
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
  txt: {
    color: colors.noticeBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: screenW - 32,
  },
});

AnnouncementDetail.navigationOptions = ({ navigation }) => {
  return {
    title: 'Detalhes do Anúncio',
    headerBackTitleVisible: false,
  };
};

AnnouncementDetail.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
