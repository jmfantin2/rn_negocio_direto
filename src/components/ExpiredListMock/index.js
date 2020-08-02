import React, { useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Card, Chip, Paragraph, Title } from 'react-native-paper';
import { colors } from 'general';
import api from '../../services/ann';

import { mockedList } from 'helpers/CattleUtility/constants';
import currencyMask from '../../helpers/currencyMask';

const ExpiredListMock = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function fetchAnnouncements() {
      const response = await api.get('/api/v1/announcements');

      setAnnouncements(response.data.content);
      setRefreshing(false);
    }

    fetchAnnouncements();
  }, [refreshing]);

  return (
    <FlatList
      data={mockedList}
      numColumns={2}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
          colors={[colors.darkCyan, colors.success]}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      }
      renderItem={({ item }) => (
        <Card style={custom.card}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('ExpiredDetail', { id: item.id })
            }
          >
            {item.picture ? (
              <Card.Cover
                style={{ height: 120, margin: 12, borderRadius: 5 }}
                source={{
                  uri: item.picture.originalUrl,
                }}
              />
            ) : (
              <Card.Cover
                style={{ height: 120, margin: 12, borderRadius: 5 }}
                source={{
                  uri:
                    'https://64.media.tumblr.com/6567a164212aaf7b6b9b7c8645ba4aaa/d60bfe9bc3c7fd99-e4/s400x600/7aa485f187a19d7a4a97235e16517c49c7efe481.png',
                }}
              />
            )}
          </TouchableOpacity>
          <Card.Content>
            <View
              style={{
                marginBottom: 8,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {item.category.map(({ name }) => (
                <Chip key={name} style={{ marginRight: 8, marginBottom: 8 }}>
                  {name}
                </Chip>
              ))}
            </View>
            <Paragraph
              style={{ color: '#b5b5b5' }}
            >{`${item.animalsQuantity} cabeças`}</Paragraph>
            <Title>{currencyMask(item.currentPrice)}</Title>
            <Text style={{ color: '#6B9061', fontSize: 16, marginTop: 8 }}>
              {`${item.location.city} (${item.location.state})`}
            </Text>
          </Card.Content>
        </Card>
      )}
    />
  );
};

const screenW = Dimensions.get('window').width;
const custom = StyleSheet.create({
  card: {
    width: screenW / 2 - 12,
    marginLeft: 8,
    marginTop: 8,
  },
});

export default ExpiredListMock;
