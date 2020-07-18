import React, { useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Button, Card, Chip, Paragraph, Title } from 'react-native-paper';
import { colors } from 'general';
import api from '../../services/ann';

const AnnouncementList = ({ navigation }) => {
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
      data={announcements}
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
              navigation.navigate('AnnouncementDetail', { id: item.id })
            }
          >
            <Card.Cover
              style={{ height: 120, margin: 12, borderRadius: 5 }}
              source={{
                uri:
                  'https://www.peta.org/wp-content/uploads/2017/07/iStock-502605347_emholk-1-668x336-1564757931.jpg?20190802025851',
              }}
            />
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
            <Title>{`R$ ${item.currentPrice},00`}</Title>
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

export default AnnouncementList;
